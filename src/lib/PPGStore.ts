import { writable } from "svelte/store";

export interface PPG {
    matchesPlayed: number;
    meanTeleop: number;
    meanAuto: number;
    meanEndgame: number;
    pointTotal: number;
    teamid: number;
    totalAuto: number;
    totalEndgame: number;
    totalTeleop: number;
}

export const ppgStore = writable<PPG[]>();

export const setPPGData = (ppg: PPG[], teamid: number) => {
    if (!ppg.some((team) => team.teamid === teamid)) {
        ppgStore.update((ppg) => [
            ...ppg,
            {
                matchesPlayed: 0,
                meanTeleop: 0,
                meanAuto: 0,
                meanEndgame: 0,
                pointTotal: 0,
                teamid: teamid,
                totalAuto: 0,
                totalEndgame: 0,
                totalTeleop: 0
            }
        ]);
    }
};