import { PUBLIC_FTC_API_KEY, PUBLIC_FTC_USERNAME } from "$env/static/public";

export const EVENT = {
    season: 2022,
    code: "USMOKSKCWLT"
};

export const fetchOptions = {
    headers: {
        "accept": "application/json",
        "Authorization": `Basic ${btoa(`${PUBLIC_FTC_USERNAME}:${PUBLIC_FTC_API_KEY}`)}`
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
    teams:                    MatchTeam[];
}

export interface MatchTeam {
    teamNumber: number;
    station:    string;
    surrogate:  boolean;
    noShow:     boolean;
    dq:         boolean;
    onField:    boolean;
}

export interface FTCTeam {
    teams:          Team[];
    teamCountTotal: number;
    teamCountPage:  number;
    pageCurrent:    number;
    pageTotal:      number;
}

export interface Team {
    teamNumber:   number;
    nameFull:     string;
    nameShort:    string;
    schoolName:   string;
    city:         string;
    stateProv:    string;
    country:      string;
    website:      string;
    rookieYear:   number;
    robotName:    string;
    districtCode: string;
    homeCMP:      string;
}
