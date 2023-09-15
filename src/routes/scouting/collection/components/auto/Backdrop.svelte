<script lang="ts">
    import { scoutingData } from "$lib/stores";

    let first = ($scoutingData.autoYellow[0] === -1 && $scoutingData.autoYellow[1] === -1) ? true : false;

    let checkedColor = [
        ["bg-w", "bg-w", "bg-w", "bg-w", "bg-w", "bg-w"],
        ["bg-w", "bg-w", "bg-w", "bg-w", "bg-w", "bg-w", "bg-w"],
        ["bg-w", "bg-w", "bg-w", "bg-w", "bg-w", "bg-w"],
    ];

    const colorTailwind = (i: number, j: number) => {
        if ($scoutingData.autoYellow[0] === i && $scoutingData.autoYellow[1] === j) {
            $scoutingData.autoYellow = [-1, -1];
        }

        if (first) {
            checkedColor[i][j] = "bg-yellow-400";
            $scoutingData.autoYellow = [i, j];
        } else {
            checkedColor[i][j] = "bg-w";
        }
        first = false;
    };

    (() => {
        if ($scoutingData.autoYellow[0] !== -1 && $scoutingData.autoYellow[1] !== -1)
            checkedColor[$scoutingData.autoYellow[0]][$scoutingData.autoYellow[1]] = "bg-yellow-400";
    })();
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
                    class={`appearance-none rounded shadow-sm p-5 checked:${checkedColor[i][j]} bg-inactive`}>
            {/each}
        </div>
    {/each}
</div>