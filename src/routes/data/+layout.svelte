<script lang="ts">
    import type { LayoutData } from "./$types";

    let searchData: number | null;

    export let data: LayoutData;

    // reduce ppg data to an array of teamids that have data
    const searchableTeams = data.ppg.map((p) => p.teamid);

    const search = () => {
        /*
        * look for team an id that matches what was typed in the searchData field
        * if not found set the searchData to null to clear field and return
        */
        if (!searchableTeams.some((teamid) => teamid === searchData)) {
            searchData = null;
            return;
        }

        // if team is found then redirect user there
        // location.href=`/data/team/${searchData}`;
    };
</script>

<nav class="w-full bg-nav shadow-lg flex border-b rounded-b top-0">
    <a href="/" class="group text-w wide-text md:text-2xl px-8 py-2 my-2">
        CERBERUS
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gradient-to-r from-active to-w max-md:hidden"></span>
    </a>
    <div class="w-1/5 flex justify-around text-md text-w font-thin">
        <a href="/data" class="group my-5 transition duration-300" data-sveltekit-reload>
            Data
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-w max-md:hidden"></span>
        </a>
        <a href="/data/ppg" class="group my-5 transition duration-300" data-sveltekit-reload>
            PPG
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-w max-md:hidden"></span>
        </a>
        <!-- TODO: make matches page -->
        <!-- <a href="/data/matches" class="max-md:hidden group my-5 transition duration-300" data-sveltekit-reload>
            Matches
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-w"></span>
        </a> -->
    </div>
    <!-- TODO: have an autocomplete based off of `existing` -->
    <form autocomplete="off" class="max-md:hidden ml-auto mr-8 m-0 p-0" on:submit|preventDefault={search}>
        <input type="number" bind:value={searchData} placeholder="Team Search..."
        class="my-4 rounded px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">
    </form>
</nav>

<slot/>

<style lang="postcss">
    .wide-text {
        letter-spacing: 5px;
    }
</style>