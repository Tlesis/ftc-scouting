import { PUBLIC_FTC_API_KEY } from "$env/static/public";

export const EVENT_KEY = "";

export const fetchOptions = {
    headers: {
        "accept": "application/json",
        "X-Application-Origin": "21677scouting",
        "X-TOA-Key": `${PUBLIC_FTC_API_KEY}=`
    }
};

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
      "scouting-data": {
        Row: {
          allianceColor: number
          id: number
          matchId: number
          teamId: number
        }
        Insert: {
          allianceColor: number
          id?: number
          matchId: number
          teamId: number
        }
        Update: {
          allianceColor?: number
          id?: number
          matchId?: number
          teamId?: number
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
