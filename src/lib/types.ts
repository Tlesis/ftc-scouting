import { PUBLIC_FTC_API_KEY, PUBLIC_FTC_USERNAME } from "$env/static/public";

export const EVENT = {
    season: 2022,
    code: "USMOKSKCWLT"
};

export const fetchOptions = {
    headers: {
        "accept": "application/json",
        "Authorization": `Basic ${Buffer.from(`${PUBLIC_FTC_USERNAME}:${PUBLIC_FTC_API_KEY}`).toString("base64")}`
    }
};

export enum AllianceColor {
    red = 0,
    blue = 1
}

export interface FTCSchedule {
    schedule: Schedule[];
}

export interface Schedule {
    description:              string;
    tournamentLevel:          string;
    series:                   number;
    matchNumber:              number;
    startTime:                Date;
    actualStartTime:          Date | null;
    postResultTime:           Date | null;
    scoreRedFinal:            number | null;
    scoreRedFoul:             number | null;
    scoreRedAuto:             number | null;
    scoreBlueFinal:           number | null;
    scoreBlueFoul:            number | null;
    scoreBlueAuto:            number | null;
    scoreBlueDriveControlled: number | null;
    scoreBlueEndgame:         number | null;
    redWins:                  boolean | null;
    blueWins:                 boolean | null;
    teams:                    Team[];
}

export interface Team {
    teamNumber: number;
    station:    string;
    surrogate:  boolean;
    noShow:     boolean;
    dq:         boolean;
    onField:    boolean;
}