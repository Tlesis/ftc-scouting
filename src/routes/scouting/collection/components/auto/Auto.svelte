<script lang="ts">
    import Backstage from "./Backstage.svelte";
    import Backdrop from "./Backdrop.svelte";
    import Random from "./Random.svelte";
    import Spikes from "./Spikes.svelte";
    import { scoutingData } from "$lib/stores";
</script>

<Random/>
<Spikes/>
<Backdrop/>

<div class="flex justify-around">
    <Backstage/>
    <button
        class={`text-w text-xl text-center w-1/3 my-auto mr-4 p-5 ${($scoutingData.autoPark) ? "bg-active" : "bg-inactive"} rounded`}
        on:click={() => $scoutingData.autoPark = !$scoutingData.autoPark}>Park</button>
</div>
