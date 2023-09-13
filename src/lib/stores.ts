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

    teleop: Scoring;

    endClimb: boolean;
    endPark: boolean;
    endMosaic: number;
    endDrone: DroneDistance;

    notes: string;
    won: boolean;

}

interface Scoring {
    backdrop: Pixel[][];
    backstage: number;
}

enum Spike {
    none,
    spike1,
    spike2,
    spike3
}

enum DroneDistance {
    field = 0,
    zone1 = 1,
    zone2 = 2,
    zone3 = 3,
    audience = 4,
    none = 5
}

export enum Pixel {
    none,
    white,
    purple,
    yellow,
    green
}

const defaultData: ScoutingData = {
    id: 0,
    matchid: 0,
    teamid: 0,
    teamcolor: AllianceColor.red,

    auto: {
        backdrop: [
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none]
        ],
        backstage: 0
    },
    teamProp: false,
    autoSpike: Spike.none,

    teleop: {
        backdrop: [
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none],
            [Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none, Pixel.none]
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