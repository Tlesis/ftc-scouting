<script lang="ts">
    import type { SupabaseClient } from "@supabase/supabase-js";
    import type { Database } from "../../../../DatabaseDefinitions";
    import { ScoutingPage, scoutingData, scoutingPage } from "$lib/stores";
    import Auto from "./auto/Auto.svelte";
    import Endgame from "./endgame/Endgame.svelte";
    import Teleop from "./teleop/Teleop.svelte";

    export let supabase: SupabaseClient<Database>;

    const submit = () => {
        console.log($scoutingData);
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