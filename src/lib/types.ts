export const EVENT_KEY = "2023mokc";

export interface TeamSimple {
    city: string;
    country: string;
    key: string;
    name: string;
    nickname: string;
    state_prov: string;
    team_number: number;
}

export interface TBAEvent {
    key:                 string;
    name:                string;
    event_code:          string;
    event_type:          number;
    district:            District;
    city:                string;
    state_prov:          string;
    country:             string;
    start_date:          Date;
    end_date:            Date;
    year:                number;
    short_name:          string;
    event_type_string:   string;
    week:                number;
    address:             string;
    postal_code:         string;
    gmaps_place_id:      string;
    gmaps_url:           string;
    lat:                 number;
    lng:                 number;
    location_name:       string;
    timezone:            string;
    website:             string;
    first_event_id:      string;
    first_event_code:    string;
    webcasts:            Webcast[];
    division_keys:       string[];
    parent_event_key:    string;
    playoff_type:        number;
    playoff_type_string: string;
}

export interface District {
    abbreviation: string;
    display_name: string;
    key:          string;
    year:         number;
}

export interface Webcast {
    type:    string;
    channel: string;
    date:    string;
    file:    string;
}

export interface Statbotics {
    key:                  string;
    year:                 number;
    event:                string;
    comp_level:           string;
    set_number:           number;
    match_number:         number;
    offseason:            boolean;
    status:               string;
    video:                null | string;
    red_1:                number;
    red_2:                number;
    red_3:                number;
    red_dq:               string;
    red_surrogate:        string;
    red_epa_sum:          number;
    red_auto_epa_sum:     number;
    red_teleop_epa_sum:   number;
    red_endgame_epa_sum:  number;
    red_rp_1_epa_sum:     number;
    red_rp_2_epa_sum:     number;
    blue_1:               number;
    blue_2:               number;
    blue_3:               number;
    blue_dq:              string;
    blue_surrogate:       string;
    blue_epa_sum:         number;
    blue_auto_epa_sum:    number;
    blue_teleop_epa_sum:  number;
    blue_endgame_epa_sum: number;
    blue_rp_1_epa_sum:    number;
    blue_rp_2_epa_sum:    number;
    winner:               null | string;
    epa_winner:           string;
    epa_win_prob:         number;
    red_rp_1_prob:        number;
    red_rp_2_prob:        number;
    blue_rp_1_prob:       number;
    blue_rp_2_prob:       number;
    playoff:              boolean;
    time:                 null | number;
    predicted_time:       null | number;
    red_score:            null | number;
    blue_score:           null | number;
    red_auto:             null | number;
    red_auto_movement:    null | number;
    red_teleop:           null | number;
    red_endgame:          null | number;
    red_no_fouls:         null | number;
    red_fouls:            null | number;
    red_rp_1:             null | number;
    red_rp_2:             null | number;
    red_tiebreaker:       null | number;
    blue_auto:            null | number;
    blue_auto_movement:   null | number;
    blue_teleop:          null | number;
    blue_endgame:         null | number;
    blue_no_fouls:        null | number;
    blue_fouls:           null | number;
    blue_rp_1:            null | number;
    blue_rp_2:            null | number;
    blue_tiebreaker:      null | number;
}

export interface TBAMatch {
    actual_time:      number | null;
    alliances:        Alliances;
    comp_level:       string;
    event_key:        string;
    key:              string | null;
    match_number:     number;
    post_result_time: number | null;
    predicted_time:   number | null;
    score_breakdown:  ScoreBreakdown | null;
    set_number:       number;
    time:             number | null;
    videos:           Video[] | null;
    winning_alliance: string | null;
}

export interface Alliances {
    blue: Alliance;
    red:  Alliance;
}

export interface Alliance {
    dq_team_keys:        unknown[];
    score:               number;
    surrogate_team_keys: string[];
    team_keys:           string[];
}

export interface ScoreBreakdown {
    blue: ScoreBreakdown;
    red:  ScoreBreakdown;
}

export interface ScoreBreakdown {
    activationBonusAchieved:     boolean;
    adjustPoints:                number;
    autoBridgeState:             string;
    autoChargeStationPoints:     number;
    autoChargeStationRobot1:     string;
    autoChargeStationRobot2:     string;
    autoChargeStationRobot3:     string;
    autoCommunity:               Community;
    autoDocked:                  boolean;
    autoGamePieceCount:          number;
    autoGamePiecePoints:         number;
    autoMobilityPoints:          number;
    autoPoints:                  number;
    coopGamePieceCount:          number;
    coopertitionCriteriaMet:     boolean;
    endGameBridgeState:          string;
    endGameChargeStationPoints:  number;
    endGameChargeStationRobot1:  string;
    endGameChargeStationRobot2:  string;
    endGameChargeStationRobot3:  string;
    endGameParkPoints:           number;
    foulCount:                   number;
    foulPoints:                  number;
    linkPoints:                  number;
    links:                       Link[];
    mobilityRobot1:              string;
    mobilityRobot2:              string;
    mobilityRobot3:              string;
    rp:                          number;
    sustainabilityBonusAchieved: boolean;
    techFoulCount:               number;
    teleopCommunity:             Community;
    teleopGamePieceCount:        number;
    teleopGamePiecePoints:       number;
    teleopPoints:                number;
    totalChargeStationPoints:    number;
    totalPoints:                 number;
}

export interface Community {
    B: string[];
    M: string[];
    T: string[];
}


export interface Link {
    nodes: number[];
    row:   string;
}

export interface Video {
    key:  string;
    type: string;
}

export enum AllianceColor {
    red = 1,
    blue
}

export enum ScoutingPages {
    auto = 1,
    teleop,
    endgame,
    loading
}