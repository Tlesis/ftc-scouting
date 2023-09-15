<script lang="ts">
    import { scoutingData } from "$lib/stores";
</script>

<h1 class="text-2xl text-w text-center mt-2">Random</h1>

<div class="flex flex-row justify-evenly">
    <div class="flex flex-col text-center font-bold">
        <input type ="radio"
            id="random"
            name="r1"
            class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
            bind:group={$scoutingData.autoRandom}
            value={1}>
        <label for="random" class="text-w">{1}</label>
    </div>
    <div class="flex flex-col text-center font-bold">
        <input type ="radio"
            id="random"
            name="r2"
            class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
            bind:group={$scoutingData.autoRandom}
            value={2}>
        <label for="random" class="text-w">{2}</label>
    </div>
    <div class="flex flex-col text-center font-bold">
        <input type ="radio"
            id="random"
            name="r3"
            class="appearance-none rounded shadow-sm p-5 checked:bg-active bg-inactive m-2"
            bind:group={$scoutingData.autoRandom}
            value={3}>
        <label for="random" class="text-w">{3}</label>
    </div>
</div>