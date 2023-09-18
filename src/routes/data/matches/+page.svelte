<svelte:head>
    <title>CTEC Cerberus | Matches</title>
</svelte:head>

<script lang="ts">
    import { EVENT } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;
    const matches = data.matches.matches;

    matches.sort((a, b) => a.matchNumber - b.matchNumber);

    const rankingPoints = () => {
        return "●●"
    }

</script>

<div class="w-full flex justify-center my-8">
    <span class="flex w-fit">
        <h1 class="text-w text-4xl font-thin">{EVENT.season} {data.eventName}</h1>
    </span>
</div>

<hr class="mx-16 my-8">

<div class="mx-24 mb-8 portrait:hidden">
    <table class="text-w text-lg border-4 border-primary w-full">
        <thead class="bg-nav rounded">
            <!-- 7.7% is about 1/13 of the available space
                 the others are multiples of 7.7% -->
            <th class="w-1/12">Match</th>
            <th class="w-1/4">Red Alliance</th>
            <th class="w-1/4">Blue Alliance</th>
            <th class="w-1/6">Scores</th>
        </thead>
        <tbody>
            {#each matches as match}
            <tr>
                <!-- Match Number -->
                <td class="text-center border-b">Quals {match.matchNumber}</td>
                <!-- Red Alliance -->
                <td class="bg-red-300 text-red-900">
                    <span class={`flex justify-evenly mx-3
                        ${((match.scoreRedFinal ?? 0) > (match.scoreBlueFinal ?? 0)) ?
                        "font-bold underline" :
                        "font-thin"}`}>
                        <span class="w-1/2 text-center">{match.teams.find((team) => team.station === "Red1")?.teamNumber}</span>
                        <span class="w-1/2 text-center">{match.teams.find((team) => team.station === "Red2")?.teamNumber}</span>
                    </span>
                </td>
                <!-- Blue Alliance -->
                <td class="bg-blue-400 text-slate-800">
                    <span class={`flex justify-evenly mx-3
                        ${((match.scoreRedFinal ?? 0) < (match.scoreBlueFinal ?? 0)) ?
                        "font-bold underline" :
                        "font-thin"}`}>
                        <span class="w-1/2 text-center">{match.teams.find((team) => team.station === "Blue1")?.teamNumber}</span>
                        <span class="w-1/2 text-center">{match.teams.find((team) => team.station === "Blue2")?.teamNumber}</span>
                    </span>
                </td>
                <!-- Scores -->
                <td class="text-center p-0">
                    <span class="flex justify-between">
                        <span class={`w-full py-1 bg-red-300 text-red-900
                            ${((match.scoreRedFinal ?? 0) > (match.scoreBlueFinal ?? 0)) ?
                            "font-bold underline" :
                            "font-thin"}`}>
                            {match.scoreRedFinal ?? ""}
                        </span>
                        <span class={`w-full py-1 bg-blue-400 text-slate-800
                            ${((match.scoreBlueFinal ?? 0) > (match.scoreRedFinal ?? 0)) ?
                            "font-bold underline" :
                            "font-thin"}`}>
                            {match.scoreBlueFinal ?? ""}
                        </span>
                    </span>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<style lang="postcss">
    .xsm {
        font-size: 0.5rem;
    }
</style>