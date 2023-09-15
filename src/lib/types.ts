import { PUBLIC_FTC_API_KEY } from "$env/static/public";

export const EVENT_KEY = "2223-KS-MKWLT";

export const fetchOptions = {
    headers: {
        "accept": "application/json",
        "X-Application-Origin": "21677scouting",
        "X-TOA-Key": `${PUBLIC_FTC_API_KEY}=`
    }
};

export interface TOAMatch {
    match_key:        string;
    event_key:        string;
    tournament_level: number;
    scheduled_time?:  Date;
    match_name:       string;
    play_number:      number;
    field_number:     string;
    match_start_time?: Date;
    prestart_count?:   number;
    post_result_time?: Date;
    cycle_time?:       number;
    red_score?:        number;
    blue_score?:       number;
    red_penalty?:      number;
    blue_penalty?:     number;
    red_auto_score?:   number;
    blue_auto_score?:  number;
    red_tele_score?:   number;
    blue_tele_score?:  number;
    red_end_score?:    number;
    blue_end_score?:   number;
    video_url?:        string;
    participants:     Participant[];
}

export interface Participant {
    match_participant_key: string;
    match_key:             string;
    team_key:              string;
    station:               number;
    station_status:        number;
    ref_status:            number;
    team:                  Team;
}

export interface Team {
    team_key:        string;
    region_key:      string;
    league_key:      string;
    team_number:     number;
    team_name_short: string;
    team_name_long:  string;
    robot_name:      string;
    last_active:     string;
    city:            string;
    state_prov:      string;
    zip_code:        number;
    country:         string;
    rookie_year:     number;
    website:         string;
}

export enum AllianceColor {
    red,
    blue
}

export interface TOATeams {
    event_participant_key: string;
    event_key:             string;
    team_key:              string;
    team_number:           number;
    is_active:             boolean;
    card_status:           string | null;
    team:                  Team;
}