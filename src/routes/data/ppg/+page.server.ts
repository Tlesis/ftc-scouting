import { EVENT, fetchOptions, type FTCTeam } from "$lib/types";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import fetch from "node-fetch";

export const load = (async ({ locals: { supabase } }) => {

    const [ teams, ppg ] = await Promise.all([

        fetch(`https://ftc-api.firstinspires.org/v2.0/${EVENT.season}/teams?eventCode=${EVENT.eventCode}`, fetchOptions)
            .then((response) => response.json() as Promise<FTCTeam>)
            .then((response) => response.teams.map((team) => ({
                teamNumber: team.teamNumber,
                teamName: team.nameShort
            }))),

        supabase.from("ppg-data").select()
            .then(({ data, error }) => {
                if (error) throw fail(500, { error: error.message });
                return data;
            })
    ]);

    return { teams, ppg };

}) satisfies PageServerLoad;