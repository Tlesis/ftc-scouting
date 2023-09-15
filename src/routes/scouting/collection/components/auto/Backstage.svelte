<script lang="ts">
    import { scoutingData } from "$lib/stores";

    const decBackstage = () => {
        if ($scoutingData.auto.backstage > 0) {
            $scoutingData.auto.backstage--;
        }
    }

</script>

<div class="bg-inactive w-2/3 mx-4 rounded flex justify-between text-w my-8">
    <button class="appearance-none rounded shadow-sm px-5 py-3 bg-active m-4 text-3xl" on:click={decBackstage}>-</button>
    <p class="text-w my-auto text-3xl font-thin">{$scoutingData.auto.backstage}</p>
    <button class="appearance-none rounded shadow-sm px-5 py-3 bg-active m-4 text-3xl" on:click={() => $scoutingData.auto.backstage++}>+</button>
</div>