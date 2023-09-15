<script lang="ts">
    import { scoutingData } from "$lib/stores";

    const hit = () => {
        // add teleop board to backstage
        for (let i = 0; i < $scoutingData.teleop.backdrop.length; i++) {
            for (let j = 0; j < $scoutingData.teleop.backdrop[i].length; j++) {
                if ($scoutingData.teleop.backdrop[i][j])
                    $scoutingData.teleop.backstage++;
            }
        }

        // add auto board to backstage
        for (let i = 0; i < $scoutingData.auto.backdrop.length; i++) {
            for (let j = 0; j < $scoutingData.auto.backdrop[i].length; j++) {
                if ($scoutingData.auto.backdrop[i][j])
                    $scoutingData.teleop.backstage++;
            }
        }

        // reset teleop board
        for (let i = 0; i < $scoutingData.teleop.backdrop.length; i++) {
            for (let j = 0; j < $scoutingData.teleop.backdrop[i].length; j++) {
                $scoutingData.teleop.backdrop[i][j] = false;
            }
        }
    }
</script>

<!-- TODO: work on to make more intutive -->
<!-- <button
    class="flex text-w text-2xl bg-active active:bg-inactive p-2 px-4 rounded my-2 mx-auto"
    on:click={hit}>
    Hit
</button> -->

<div class="flex flex-col gap-1 mb-4 border-8 border-red-alliance rounded p-2 w-fit mx-auto">
    <h1 class="text-xl text-w text-center">Backdrop</h1>
    {#each $scoutingData.teleop.backdrop as backdropRow, i}
        <div class="flex justify-center gap-1">
            {#each backdropRow as pixelSpot, j}
                <input
                    type="checkbox"
                    name={`${i}-${j}`}
                    id="teleopBackdrop"
                    bind:checked={pixelSpot}
                    class="appearance-none rounded shadow-sm p-4 checked:bg-w bg-inactive">
            {/each}
        </div>
    {/each}
</div>