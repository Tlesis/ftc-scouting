<script lang="ts">
    import { scoutingData } from "$lib/stores";

    const decBackstage = () => {
        if ($scoutingData.teleop.backstage > 0) {
            $scoutingData.teleop.backstage--;
        }
    }

</script>


<div class="bg-inactive mx-4 rounded flex justify-between text-w">
    <button class="appearance-none rounded shadow-sm px-5 py-3 bg-active m-4 mx-6 text-3xl" on:click={decBackstage}>-</button>
    <p class="text-w my-auto text-4xl font-thin">{$scoutingData.teleop.backstage} + {$scoutingData.auto.backstage}</p>
    <button class="appearance-none rounded shadow-sm px-5 py-3 bg-active m-4 mx-6 text-3xl" on:click={() => $scoutingData.teleop.backstage++}>+</button>
</div>