import { PUBLIC_FTC_API_KEY, PUBLIC_FTC_USERNAME } from "$env/static/public";

export const EVENT = {
    season: 2022,
    eventCode: "USMOKSKCWLT"
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
    teams:          TeamTeam[];
    teamCountTotal: number;
    teamCountPage:  number;
    pageCurrent:    number;
    pageTotal:      number;
}

export interface TeamTeam {
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

export interface FTCMatch {
    matches: Match[];
}

export interface Match {
    actualStartTime: Date | null;
    description:     string;
    tournamentLevel: string;
    series:          number;
    matchNumber:     number;
    scoreRedFinal:   number | null;
    scoreRedFoul:    number | null;
    scoreRedAuto:    number | null;
    scoreBlueFinal:  number | null;
    scoreBlueFoul:   number | null;
    scoreBlueAuto:   number | null;
    postResultTime:  Date | null;
    teams:           Team[];
    modifiedOn:      Date | null;
}

export interface Team {
    teamNumber: number;
    station:    string;
    dq:         boolean;
    onField:    boolean;
}

export interface FTCEvent {
    events:     Event[];
    eventCount: number;
}

export interface Event {
    eventId:       string;
    code:          string;
    divisionCode:  string| null;
    name:          string;
    remote:        boolean;
    hybrid:        boolean;
    fieldCount:    number;
    published:     boolean;
    type:          string;
    typeName:      string;
    regionCode:    string;
    leagueCode:    string;
    districtCode:  string;
    venue:         string;
    address:       string;
    city:          string;
    stateprov:     string;
    country:       string;
    website:       string;
    liveStreamUrl: string;
    webcasts:      string[] | null;
    timezone:      string;
    dateStart:     Date | null;
    dateEnd:       Date | null;
}
