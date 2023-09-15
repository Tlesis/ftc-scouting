<script lang="ts">
    import { scoutingData } from "$lib/stores";
</script>

<div class="text-w flex flex-col">
    <div class="flex justify-between mx-4">
        <h1 class="text-2xl text-w mx-auto mt-2">Climb</h1>
        <button
            class={`rounded shadow-sm p-5 ${($scoutingData.endClimb) ? "bg-active" : "bg-inactive"} m-2`}
            on:click={() => { $scoutingData.endClimb = !$scoutingData.endClimb; $scoutingData.endPark = false; }}></button>
    </div>
    <div class="flex justify-between mx-4">
        <h1 class="text-2xl text-w mx-auto mt-2">Park</h1>
        <button
            class={`rounded shadow-sm p-5 ${($scoutingData.endPark) ? "bg-active" : "bg-inactive"} m-2`}
            on:click={() => { $scoutingData.endPark = !$scoutingData.endPark; $scoutingData.endClimb = false; }}></button>
    </div>
</div>