<script lang="ts">
    import { Spike, scoutingData } from "$lib/stores";
    import { AllianceColor } from "$lib/types";
    import SpikeSvg from "./SpikeSVG.svelte";

    const spikeColor = ($scoutingData.teamcolor === AllianceColor.red) ? "bg-red-alliance" : "bg-blue-alliance";

    const setSpike = (spike: Spike, correctSpike: Spike) => {
        if (($scoutingData.autoSpike !== spike) || ($scoutingData.autoSpike === correctSpike))
            $scoutingData.autoSpike = ($scoutingData.autoRandom === spike) ? correctSpike : spike;
        else
            $scoutingData.autoSpike = Spike.none;
    }
</script>

<div class="flex justify-center gap-4 mx-14 m-4">
    <button class={`${spikeColor} w-5 h-32 text-center flex flex-col rounded`} on:click={() => setSpike(Spike.spike1, Spike.spikeCorrect1)}>
        <SpikeSvg horizontal={false} random={1} purple={($scoutingData.autoSpike === Spike.spike1) || ($scoutingData.autoSpike === Spike.spikeCorrect1)}/>
    </button>

    <div class="flex flex-col">
        <button class={`${spikeColor} h-5 w-44 text-w text-center flex rounded`} on:click={() => setSpike(Spike.spike2, Spike.spikeCorrect2)}>
            <SpikeSvg horizontal={true} random={2} purple={($scoutingData.autoSpike === Spike.spike2) || ($scoutingData.autoSpike === Spike.spikeCorrect2)}/>
        </button>
        <label for="teamprop" class="text-w text-center text-2xl my-auto">Custom Prop</label>
        <input
            type="checkbox"
            name="teamprop"
            id="teamprop"
            bind:checked={$scoutingData.teamProp}
            class="appearance-none checked:bg-active bg-inactive rounded p-5 my-auto">
    </div>
    <button class={`${spikeColor} w-5 h-32 text-center flex flex-col rounded`} on:click={() => setSpike(Spike.spike3, Spike.spikeCorrect3)}>
        <SpikeSvg horizontal={false} random={3} purple={($scoutingData.autoSpike === Spike.spike3) || ($scoutingData.autoSpike === Spike.spikeCorrect3)}/>
    </button>
</div>