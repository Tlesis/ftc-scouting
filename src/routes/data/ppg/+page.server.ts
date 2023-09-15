import { EVENT_KEY, fetchOptions, type TOATeams } from "$lib/types";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import fetch from "node-fetch";

export const load = (async ({ locals: { supabase } }) => {

    const [ teams, ppg ] = await Promise.all([

        fetch(`https://theorangealliance.org/api/event/${EVENT_KEY}/teams`, fetchOptions)
            .then((response) => response.json() as Promise<TOATeams[]>),

        supabase.from("ppg-data").select()
            .then(({ data, error }) => {
                if (error) throw fail(500, { error: error.message });
                return data;
            })
    ]);

    return { teams, ppg };

}) satisfies PageServerLoad;