<script lang="ts">
    import { DroneDistance, scoutingData } from "$lib/stores";
</script>

<!-- really i should use radio buttons for this but i want this out quickly so this is faster -->
<div class="flex flex-col text-w text-3xl m-2 gap-2">
    <button
        class={`px-auto py-4 border-2 border-t-0 ${($scoutingData.endDrone === DroneDistance.field) ? "bg-active" : ""}`}
        on:click={() => $scoutingData.endDrone = DroneDistance.field}>Field</button>
    
    <button 
        class={`px-auto py-4 border-b-2 border-dotted ${($scoutingData.endDrone === DroneDistance.zone1) ? "bg-active" : ""}`}
        on:click={() => $scoutingData.endDrone = DroneDistance.zone1}>Zone 1</button>

    <button 
        class={`px-auto py-4 border-b-2 border-dotted ${($scoutingData.endDrone === DroneDistance.zone2) ? "bg-active" : ""}`}
        on:click={() => $scoutingData.endDrone = DroneDistance.zone2}>Zone 2</button>

    <button
        class={`px-auto py-4 border-b-2 border-dotted ${($scoutingData.endDrone === DroneDistance.zone3) ? "bg-active" : ""}`}
        on:click={() => $scoutingData.endDrone = DroneDistance.zone3}>Zone 3</button>

    <button
        class={`px-auto py-4 ${($scoutingData.endDrone === DroneDistance.audience) ? "bg-active" : ""}`}
        on:click={() => $scoutingData.endDrone = DroneDistance.audience}>Audience</button>

    <button
        class="px-auto bg-inactive p-1 rounded active:bg-active"
        on:click={() => $scoutingData.endDrone = DroneDistance.none}>None</button>
</div>

<!-- Audience -->