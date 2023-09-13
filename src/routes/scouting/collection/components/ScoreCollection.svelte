<script lang="ts">
    import type { SupabaseClient } from "@supabase/supabase-js";
    import type { Database } from "../../../../DatabaseDefinitions";
    import { ScoutingPage, scoutingPage } from "$lib/stores";
    import Auto from "./auto/Auto.svelte";
    import Endgame from "./endgame/Endgame.svelte";
    import Teleop from "./teleop/Teleop.svelte";

    export let supabase: SupabaseClient<Database>;
</script>

{#if $scoutingPage === ScoutingPage.auto}
    <Auto/>
{:else if $scoutingPage === ScoutingPage.teleop}
    <Teleop/>
{:else if $scoutingPage === ScoutingPage.endgame}
    <Endgame/>
{/if}