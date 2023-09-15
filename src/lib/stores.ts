import { writable } from "svelte/store";
import { AllianceColor } from "./types";

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

export enum ScoutingPage {
    auto,
    teleop,
    endgame,
    loading
}

export const scoutingPage = writable<ScoutingPage>(ScoutingPage.auto);