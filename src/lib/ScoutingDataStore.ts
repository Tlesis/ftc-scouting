import { writable } from "svelte/store";
import { AllianceColor, ScoutingPages } from "./types";
import type { Database } from "../DatabaseDefinitions";

export interface ScoutingData {
    id: number;
    matchid: number;
    teamid: number;
    teamcolor: AllianceColor;
    auto: Scoring[];
    autoCharge: ChargeStationLevel;
    autoMobility: boolean;
    teleop: Scoring[];
    endgame: ChargeStationLevel;
    playDirty: boolean;
    win: boolean;
    notes: string;
}

interface Scoring {
    place: string;
    activated: boolean[];
}

export enum ChargeStationLevel {
    NotAttempted = "Not Attempted",
    failed = "Failed",
    docked = "Docked",
    balanced = "Engaged"
}

const defaultScoutingData = {
    id: 0,
    matchid: 0,
    teamid: 0,
    teamcolor: AllianceColor.red,
    auto: [
        { place: "auto-top", activated: [false, false, false, false, false, false, false, false, false] },
        { place: "auto-mid", activated: [false, false, false, false, false, false, false, false, false] },
        { place: "auto-bot", activated: [false, false, false, false, false, false, false, false, false] }
    ],
    autoCharge: ChargeStationLevel.NotAttempted,
    autoMobility: false,
    teleop: [
        { place: "tele-top", activated: [false, false, false, false, false, false, false, false, false] },
        { place: "tele-mid", activated: [false, false, false, false, false, false, false, false, false] },
        { place: "tele-bot", activated: [false, false, false, false, false, false, false, false, false] }
    ],
    endgame: ChargeStationLevel.NotAttempted,
    playDirty: false,
    win: false,
    notes: ""
};

export const scoutingData = writable<ScoutingData>(defaultScoutingData);

/* Kill me */
export const compileData = (scoutingData: ScoutingData) => {
    const { auto, teleop } = scoutingData;

    const compiledData: Database["public"]["Tables"]["scouting-data"]["Row"] = {
        autoHigh: auto[0].activated.filter((node) => node).length,
        autoMid: auto[1].activated.filter((node) => node).length,
        autoLow: auto[2].activated.filter((node) => node).length,
        autoCharge: scoutingData.autoCharge,
        autoMobility: scoutingData.autoMobility,
        teleHigh: teleop[0].activated.filter((node) => node).length,
        teleMid: teleop[1].activated.filter((node) => node).length,
        teleLow: teleop[2].activated.filter((node) => node).length,
        endCharge: scoutingData.endgame,
        playDirty: scoutingData.playDirty,
        win: scoutingData.win,
        notes: scoutingData.notes,
        id: scoutingData.id,
        matchid: scoutingData.matchid,
        teamcolor: scoutingData.teamcolor,
        teamid: scoutingData.teamid
    };

    return score(compiledData);
};

export const score = (compiledData: Database["public"]["Tables"]["scouting-data"]["Row"]) => {
    let auto = 0,
        teleop = 0,
        endgame = 0;

    auto += (
        (Number(compiledData.autoHigh) * 6) +
        (Number(compiledData.autoMid) * 4) +
        (Number(compiledData.autoLow) * 3) +
        (Number(compiledData.autoMobility) * 3) +
        (() => {
            if (compiledData.autoCharge === ChargeStationLevel.balanced)
                return 12;
            if (compiledData.autoCharge === ChargeStationLevel.docked)
                return 8;
            if (compiledData.autoCharge === ChargeStationLevel.failed)
                return -2.5;
            return 0;
        })()
    );

    teleop += (
        (Number(compiledData.teleHigh) * 5) +
        (Number(compiledData.teleMid) * 3) +
        (Number(compiledData.teleLow) * 2)
    );

    endgame += (() => {
        if (compiledData.endCharge === ChargeStationLevel.balanced)
            return 10;
        if (compiledData.endCharge === ChargeStationLevel.docked)
            return 6;
        if (compiledData.endCharge === ChargeStationLevel.failed)
            return -2;
        return 0;
    })();

    return {
        compiledData,
        scoredData: {
            auto,
            teleop,
            endgame
        }
    };
};

/** Page Location **/
export const pageLocation = writable<ScoutingPages>(ScoutingPages.auto);
