<script lang="ts">
    import type { SupabaseClient } from "@supabase/supabase-js";
    import type { Database } from "../../../../DatabaseDefinitions";
    import { ScoutingPage, compileAndScore, ppgStore, scoutingData, scoutingPage } from "$lib/stores";
    import Auto from "./auto/Auto.svelte";
    import Endgame from "./endgame/Endgame.svelte";
    import Teleop from "./teleop/Teleop.svelte";

    export let supabase: SupabaseClient<Database>;

    const submit = async () => {
        $scoutingPage = ScoutingPage.loading;

        const data = compileAndScore($scoutingData);
        do {
            var { error: dataError } = await supabase.from("scouting-data").update(data.compiledData).eq("id", $scoutingData.id);
        } while (dataError);

        const scores = data.scoredData;
        const i = $ppgStore.findIndex((team) => team.teamid === $scoutingData.teamid);
        const ppgData = {
            matchesPlayed: $ppgStore[i].matchesPlayed + 1,
            meanTeleop: ($ppgStore[i].totalTeleop + scores.teleop) / ($ppgStore[i].matchesPlayed + 1),
            meanAuto: ($ppgStore[i].totalAuto + scores.auto) / ($ppgStore[i].matchesPlayed + 1),
            meanEndgame: ($ppgStore[i].totalEndgame + scores.endgame) / ($ppgStore[i].matchesPlayed + 1),
            pointTotal: $ppgStore[i].pointTotal + (scores.auto + scores.teleop + scores.endgame),
            teamid: $ppgStore[i].teamid,
            totalAuto: $ppgStore[i].totalAuto + scores.auto,
            totalEndgame: $ppgStore[i].totalEndgame + scores.endgame,
            totalTeleop: $ppgStore[i].totalTeleop + scores.teleop
        }

        do {
            var { error: ppgError } = await supabase.from("ppg-data").update(ppgData).eq("teamid", ppgData.teamid);
        } while (ppgError);

        location.href = "/scouting";
    }
</script>

{#if $scoutingPage === ScoutingPage.auto}
    <Auto/>
{:else if $scoutingPage === ScoutingPage.teleop}
    <Teleop/>
{:else if $scoutingPage === ScoutingPage.endgame}
    <Endgame/>
    <div class="flex justify-center my-4">
        <button
            class="text-w text-2xl py-3 bg-active active:bg-inactive rounded w-5/6"
            on:click={submit}>
            Submit
        </button>
    </div>
{/if}