export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "ppg-data": {
        Row: {
          matchesPlayed: number
          meanAuto: number
          meanEndgame: number
          meanTeleop: number
          pointTotal: number
          teamid: number
          totalAuto: number
          totalEndgame: number
          totalTeleop: number
        }
        Insert: {
          matchesPlayed?: number
          meanAuto?: number
          meanEndgame?: number
          meanTeleop?: number
          pointTotal?: number
          teamid: number
          totalAuto?: number
          totalEndgame?: number
          totalTeleop?: number
        }
        Update: {
          matchesPlayed?: number
          meanAuto?: number
          meanEndgame?: number
          meanTeleop?: number
          pointTotal?: number
          teamid?: number
          totalAuto?: number
          totalEndgame?: number
          totalTeleop?: number
        }
        Relationships: []
      }
      "scouting-data": {
        Row: {
          allianceColor: number
          autoDrop: number | null
          autoPark: boolean | null
          autoSpike: number | null
          autoStage: number | null
          autoYellow: boolean | null
          endClimb: boolean | null
          endDrone: number | null
          endMosaics: number | null
          endPark: boolean | null
          id: number
          matchid: number
          notes: string | null
          teamid: number
          teamProp: boolean | null
          teleopDrop: number | null
          teleopStage: number | null
          won: boolean | null
        }
        Insert: {
          allianceColor: number
          autoDrop?: number | null
          autoPark?: boolean | null
          autoSpike?: number | null
          autoStage?: number | null
          autoYellow?: boolean | null
          endClimb?: boolean | null
          endDrone?: number | null
          endMosaics?: number | null
          endPark?: boolean | null
          id?: number
          matchid: number
          notes?: string | null
          teamid: number
          teamProp?: boolean | null
          teleopDrop?: number | null
          teleopStage?: number | null
          won?: boolean | null
        }
        Update: {
          allianceColor?: number
          autoDrop?: number | null
          autoPark?: boolean | null
          autoSpike?: number | null
          autoStage?: number | null
          autoYellow?: boolean | null
          endClimb?: boolean | null
          endDrone?: number | null
          endMosaics?: number | null
          endPark?: boolean | null
          id?: number
          matchid?: number
          notes?: string | null
          teamid?: number
          teamProp?: boolean | null
          teleopDrop?: number | null
          teleopStage?: number | null
          won?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
