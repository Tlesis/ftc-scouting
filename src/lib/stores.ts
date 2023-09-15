import { writable } from "svelte/store";
import { AllianceColor } from "./types";
import type { Database } from "../DatabaseDefinitions";

export interface ScoutingData {
    id: number;
    matchid: number;
    teamid: number;
    teamcolor: AllianceColor;

    auto: Scoring;
    teamProp: boolean;
    autoSpike: Spike;
    autoRandom: number;
    autoYellow: number[];
    autoPark: boolean;

    teleop: Scoring;

    endClimb: boolean;
    endPark: boolean;
    endMosaic: number;
    endDrone: DroneDistance;

    notes: string;
    won: boolean;
}

interface Scoring {
    backdrop: boolean[][];
    backstage: number;
}

export enum Spike {
    none = 0,
    spike1 = 1,
    spike2 = 2,
    spike3 = 3
}

export enum DroneDistance {
    field = 0,
    zone1 = 1,
    zone2 = 2,
    zone3 = 3,
    audience = 4,
    none = 5
}

export enum AutoYellow {
    unknown,
    yes,
    no
}

const defaultData: ScoutingData = {
    id: 0,
    matchid: 0,
    teamid: 0,
    teamcolor: AllianceColor.red,

    auto: {
        backdrop: [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ],
        backstage: 0
    },
    teamProp: false,
    autoSpike: Spike.none,
    autoRandom: 1,
    autoYellow: [-1, -1],
    autoPark: false,

    teleop: {
        backdrop: [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ],
        backstage: 0
    },

    endClimb: false,
    endPark: false,
    endMosaic: 0,
    endDrone: DroneDistance.none,

    notes: "",
    won: false
};

export const scoutingData = writable<ScoutingData>(defaultData);

export const compileAndScore = (data: ScoutingData) => {

    const compiledData = {
        id: data.id,
        matchid: data.matchid,
        teamid: data.teamid,
        allianceColor: data.teamcolor,

        autoDrop: data.auto.backdrop.flat().filter((v) => v).length,
        autoPark: data.autoPark,
        autoSpike: data.autoSpike,
        autoStage: data.auto.backstage,
        autoYellow: (data.autoYellow[0] === -1 || data.autoYellow[1] === -1) ? false : true,

        teamProp: data.teamProp,
        teleopDrop: data.teleop.backdrop.flat().filter((v) => v).length,
        teleopStage: data.teleop.backstage,

        endClimb: data.endClimb,
        endDrone: data.endDrone,
        endMosaics: data.endMosaic,
        endPark: data.endPark,

        notes: data.notes,
        won: data.won
    };

    return score(compiledData, data);
};

const score = (data: Database["public"]["Tables"]["scouting-data"]["Row"], raw: ScoutingData) => {
    let autoScore = 0;
    let teleopScore = 0;
    let endgameScore = 0;

    // Auto
    autoScore += (data.autoPark) ? 5 : 0;
    autoScore += Number(data.autoDrop) * 5;
    autoScore += Number(data.autoStage) * 3;
    autoScore += (() => {
        if (raw.autoRandom === Number(data.autoSpike))
            return (data.teamProp) ? 20 : 10;
        return 0;
    })();
    autoScore += (() => {
        if ((Math.floor(raw.autoYellow[1] / 2) + 1) === raw.autoRandom)
            return (data.teamProp) ? 20 : 10;
        return 0;
    })();

    // Teleop
    teleopScore += Number(data.teleopStage);
    teleopScore += Number(data.teleopDrop) * 3;

    // Endgame
    endgameScore += Number(data.endMosaics) * 10;
    endgameScore += (() => {
        let b = 0;
        if (raw.teleop.backdrop[2].some((v) => v))
            b += 10;
        if (raw.teleop.backdrop[5].some((v) => v))
            b += 10;
        if (raw.teleop.backdrop[8].some((v) => v))
            b += 10;
        return b;
    })();
    endgameScore += Number(data.endClimb) * 20;
    endgameScore += Number(data.endPark) * 5;
    endgameScore += (() => {
        if (Number(data.endDrone ?? 0) === DroneDistance.zone1)
            return 30;
        else if (Number(data.endDrone ?? 0) === DroneDistance.zone2)
            return 20;
        else if (Number(data.endDrone ?? 0) === DroneDistance.zone3)
            return 10;

        return 0;
    })();

    return {
        compiledData: data,
        scoredData: {
            auto: autoScore,
            teleop: teleopScore,
            endgame: endgameScore
        }
    };
};

export enum ScoutingPage {
    auto,
    teleop,
    endgame,
    loading
}

export const scoutingPage = writable<ScoutingPage>(ScoutingPage.auto);