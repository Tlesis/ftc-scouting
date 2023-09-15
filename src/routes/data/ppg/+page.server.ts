import { EVENT_KEY, fetchOptions, type TOATeams } from "$lib/types";
import type { PageServerLoad } from "./$types";
import fetch from "node-fetch";

export const load = (async () => {

    const [teams] = await Promise.all([
        fetch(`https://theorangealliance.org/api/event/${EVENT_KEY}/teams`, fetchOptions)
            .then((response) => response.json() as Promise<TOATeams[]>)
    ]);

    return { teams };

}) satisfies PageServerLoad;