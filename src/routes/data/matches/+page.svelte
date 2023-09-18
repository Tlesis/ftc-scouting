<svelte:head>
    <title>CTEC Cerberus | Matches</title>
</svelte:head>

<script lang="ts">
    import { EVENT } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;
    const matches = data.matches.matches;

    matches.sort((a, b) => a.matchNumber - b.matchNumber);

    const prefix = () => {
        if (screen.availHeight > screen.availWidth)
            return "Quals";

        return "";
    }

</script>

<div class="w-full flex justify-center text-center my-8">
    <h1 class="text-w text-4xl font-thin">{EVENT.season} {data.eventName}</h1>
</div>

<hr class="mx-16 my-8">

<div class="mx-24 mb-8 portrait:hidden max-sm:hidden">
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
            {#each matches as match, i}
            <tr>
                <!-- Match Number -->
                <td class="text-center border-b">
                    <span class="max-md:hidden">Quals</span>
                    {match.matchNumber}
                </td>
                <!-- Red Alliance -->
                <td class={`${(i % 2 == 0) ? "bg-red-300" : "bg-red-400"} text-red-900`}>
                    <span class={`flex justify-evenly mx-3 underline
                        ${((match.scoreRedFinal ?? 0) > (match.scoreBlueFinal ?? 0)) ?
                        "font-bold underline" :
                        "font-thin"}`}>
                        <a href={`https://theorangealliance.org/teams/${match.teams.find((team) => team.station === "Red1")?.teamNumber}`}
                            target="_blank"
                            class="w-1/2 text-center">
                            {match.teams.find((team) => team.station === "Red1")?.teamNumber}
                        </a>
                        <a href={`https://theorangealliance.org/teams/${match.teams.find((team) => team.station === "Red2")?.teamNumber}`}
                            target="_blank"
                            class="w-1/2 text-center">
                            {match.teams.find((team) => team.station === "Red2")?.teamNumber}
                        </a>
                    </span>
                </td>
                <!-- Blue Alliance -->
                <td class={`${(i % 2 == 0) ? "bg-blue-300" : "bg-blue-400"} text-slate-800`}>
                    <span class={`flex justify-evenly mx-3 underline
                        ${((match.scoreRedFinal ?? 0) < (match.scoreBlueFinal ?? 0)) ?
                        "font-bold" :
                        "font-thin"}`}>
                        <span class="w-1/2 text-center">{match.teams.find((team) => team.station === "Blue1")?.teamNumber}</span>
                        <span class="w-1/2 text-center">{match.teams.find((team) => team.station === "Blue2")?.teamNumber}</span>
                    </span>
                </td>
                <!-- Scores -->
                <td class="text-center p-0">
                    <span class="flex justify-between">
                        <span class={`w-full py-1 ${(i % 2 == 0) ? "bg-red-300" : "bg-red-400"} text-red-900
                            ${((match.scoreRedFinal ?? 0) > (match.scoreBlueFinal ?? 0)) ?
                            "font-bold" :
                            "font-thin"}`}>
                            {match.scoreRedFinal ?? ""}
                        </span>
                        <span class={`w-full py-1 ${(i % 2 == 0) ? "bg-blue-300" : "bg-blue-400"} text-slate-800
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

<div class="sm:hidden text-w text-center">
    Phone Landscape To See Data
</div>

<style lang="postcss">
    .xsm {
        font-size: 0.5rem;
    }
</style>