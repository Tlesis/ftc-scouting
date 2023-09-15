import { AllianceColor, EVENT_KEY, fetchOptions, type TOAMatch } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { fail, type Actions, redirect } from "@sveltejs/kit";
import fetch from "node-fetch";

export const load = (async ({ locals: { supabase } }) => {

    const [matches, existing] = await Promise.all([

        fetch("https://theorangealliance.org/api/event/2223-KS-MKWLT/matches", fetchOptions),
            /* .then((response) => response.json() as Promise<TOAMatch[]>)
            .then((response) =>
                response.filter((match) => match.tournament_level === 1)
                    .map((match) => ({
                        matchNumber: Number(match.match_name.slice(6)),
                        red: match.participants.filter((team) => team.station === 11 || team.station === 12)
                            .map((team) => team.team.team_number),

                        blue: match.participants.filter((team) => team.station === 21 || team.station === 22)
                            .map((team) => team.team.team_number)
                    }))), */

        supabase.from("scouting-data").select().then(({ data, error }) => {
            if (error) throw fail(500, { error: error.message });
            return data;
        })
    ]);

    return { matches, existing };

}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const form = await request.formData();

        const matchid = form.get("matchid") as string;
        const teamid = form.get("teamid") as string;

        if (!matchid && !teamid) {
            return fail(500, { error: "need to provide match number and team number" });
        } else if (!matchid) {
            return fail(500, { error: "need to provide match number" });
        } else if (!teamid) {
            return fail(500, { error: "need to provide team number" });
        }

        const { data: existing, error } = await supabase.from("scouting-data").select("matchid, teamid");

        if (error)
            return fail(500, { error: error.message });

        if (existing.some((row) => row.matchid === Number(matchid) && row.teamid === Number(teamid))) {
            return fail(500, { error: "that team is already being scouted" });
        }

        /* upload data */
        const res = await fetch(`https://theorangealliance.org/api/event/${EVENT_KEY}/matches`, fetchOptions);

        if (!res.ok)
            throw fail(500);

        const results = await res.json() as TOAMatch[];

        const match = results.filter((match) => match.tournament_level === 1).find((match) => match.match_name.slice(6) === matchid);

        const teamcolor = (() => {
            if (match?.participants.filter((team) => team.station == 11 || team.station == 12).some((team) => team.team.team_number === Number(teamid))) return AllianceColor.red;
            if (match?.participants.filter((team) => team.station == 21 || team.station == 22).some((team) => team.team.team_number === Number(teamid))) return AllianceColor.blue;
            return null;
        })();

        if (teamcolor === null) {
            return fail(500, { error: "that team isn't available this match" });
        }

        const { data, error: supabaseError } = await supabase
            .from("scouting-data")
            .insert({
                matchid: Number(matchid),
                teamid: Number(teamid),
                allianceColor: teamcolor
            })
            .select("id")
            .single();

        if (supabaseError)
            return fail(500, { error: supabaseError.message });

        throw redirect(303, "/scouting/collection?" + new URLSearchParams({ id: data.id.toString() }));
    }
} satisfies Actions;