import { EVENT, fetchOptions, type FTCEvent, type FTCMatch } from "$lib/types";
import type { PageServerLoad } from "../$types";

export const load = (async () => {

    const [ matches, eventName ] = await Promise.all([

        fetch(`https://ftc-api.firstinspires.org/v2.0/${EVENT.season}/matches/${EVENT.eventCode}?tournamentLevel=qual`, fetchOptions)
            .then((response) => response.json() as Promise<FTCMatch>),

        fetch(`https://ftc-api.firstinspires.org/v2.0/${EVENT.season}/events?eventCode=${EVENT.eventCode}`, fetchOptions)
            .then((response) => response.json() as Promise<FTCEvent>)
            .then((event) => event.events[0].name)

    ]);

    return { matches, eventName };

}) satisfies PageServerLoad;