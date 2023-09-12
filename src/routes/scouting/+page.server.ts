import type { PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";
import { fetchOptions } from "../../DatabaseDefinitions";
import fetch from "node-fetch";

export const load = (async () => {

    const res = await fetch("https://theorangealliance.org/api/seasons", fetchOptions);

    if (!res.ok)
        throw fail(500);

    const event = await res.json();

    // TODO: make work
    /* const toa = new API(`${PUBLIC_FTC_API_KEY}=`, "21677scouting");

    const event = await toa.getSeasons(); */

    return { event };

}) satisfies PageServerLoad;