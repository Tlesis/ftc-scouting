<script lang="ts">
    import { scoutingData } from "$lib/stores";

    const compare = (i: number, j: number) => {
        return ($scoutingData.autoYellow[0] === i) && ($scoutingData.autoYellow[1] === j);
    }

    let first: boolean = (compare(-1, -1) ? true : false);

    const colorTailwind = (i: number, j: number) => {
        if (compare(i, j)) {
            $scoutingData.autoYellow = [-1, -1];
            first = false;
            return;
        }


        if (first === true) {
            $scoutingData.autoYellow = [i, j];
            first = false;
        }
    };
</script>


<h1 class="text-xl text-w text-center">Backdrop</h1>
<div class="flex flex-col gap-1 m-2">
    {#each $scoutingData.auto.backdrop as backdropRow, i}
        <div class="flex justify-center gap-1">
            {#each backdropRow as pixelSpot, j}
                <input
                    type="checkbox"
                    name={`${i}-${j}`}
                    id="autoBackdrop"
                    bind:checked={pixelSpot}
                    on:change={() => colorTailwind(i, j)}
                    class={`appearance-none rounded shadow-sm p-5 ${
                        ((($scoutingData.autoYellow[0] === i) && ($scoutingData.autoYellow[1] === j))) ?
                        "checked:bg-yellow-400" :
                        "checked:bg-w"}
                        bg-inactive`}>
            {/each}
        </div>
    {/each}
</div>