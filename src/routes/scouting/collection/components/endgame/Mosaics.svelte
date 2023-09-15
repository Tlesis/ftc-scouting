<script lang="ts">
    import { scoutingData } from "$lib/stores";

    const dec = () => {
        if ($scoutingData.endMosaic > 0) {
            $scoutingData.endMosaic--;
        }
    }

    const inc = () => {
        if ($scoutingData.endMosaic < 11) {
            $scoutingData.endMosaic++;
        }
    }
</script>

<div class="flex justify-evenly text-w">
    <button class="appearance-none rounded shadow-sm px-5 py-3 bg-active active:bg-inactive m-4 text-3xl" on:click={dec}>-</button>
    <button class="appearance-none rounded shadow-sm px-5 py-3 bg-active active:bg-inactive m-4 text-3xl" on:click={inc}>+</button>
</div>
<h1 class="text-3xl text-w text-center font-thin">{$scoutingData.endMosaic} Mosaics</h1>