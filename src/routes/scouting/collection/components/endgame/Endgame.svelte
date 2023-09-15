<script>
    import { scoutingData } from "$lib/stores";
    import Drone from "./Drone.svelte";
    import EndgameBoxes from "./EndgameBoxes.svelte";
    import Mosaics from "./Mosaics.svelte";
</script>

<div class="flex">
    <div class="w-1/2 border-r-2 border-dashed">
        <h1 class="text-3xl text-w text-center font-thin border-b-2 border-dashed m-2">Drone</h1>
        <Drone/>
    </div>
    <div class="w-1/2">
        <h1 class="text-3xl text-w text-center font-thin border-b-2 border-dashed m-2">Objectives</h1>
        <EndgameBoxes/>
        <Mosaics/>
        <!-- notes -->
        <div class="flex justify-center h-1/3 my-3">
            <textarea
                name="notes"
                placeholder="Notes"
                bind:value={$scoutingData.notes}
                class="rounded w-5/6"></textarea>
        </div>
    </div>
</div>
