<svelte:head>
    <title>CTEC Cerberus | Data</title>
</svelte:head>

<script lang="ts">
    import { AllianceColor, EVENT_KEY } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;

    const headers = ["Match", "Team", "Win",
        "Custom Prop", "Auto Backdrop", "Auto Backstage", "Auto Park", "Auto Spike",
        "Teleop Backdrop", "Teleop Backstage",
        "Climb", "Park", "Drone"];

    // download button callback
    // generates the CSV of compiled data inplace
    const download = () => {
        const headers = Object.keys(data.existing[0]).join(',');
        const rows = data.existing.map(obj => Object.values(obj).join(','));
        const csvContent = `${headers}\n${rows.join('\n')}`;

        const link = document.createElement('a');
        link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
        link.setAttribute('download', 'scouting-data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // sort teams by match number then team color then team number from ascending order
    data.existing.sort((a, b) => {

        // sort by team match id if not the same
        if (a.matchid !== b.matchid) {
            return a.matchid - b.matchid;

        // sort by team color if not the same
        } else if (a.allianceColor !== b.allianceColor) {
            return a.allianceColor - b.allianceColor;

        // sort by team id
        } else {
            return a.teamid - b.teamid;
        }
    });
</script>

<button class=" text-w text-center text-lg shadow-sm rounded bg-active px-4 py-2 m-4 max-sm:hidden"
    on:click={download}>
    Download CSV
</button>

<h1 class="text-w text-center text-5xl md:-mt-10 max-md:mt-4 mb-8 font-thin">Collected Data</h1>

<div class="flex justify-center mb-8 max-sm:hidden">
    <table class="text-center mx-16 w-full">
        <thead class="text-w">
            {#each headers as header}
                <th class="w-1/12"><span class="w-11/12 rounded my-2 mx-auto">{header}</span></th>
            {/each}
        </thead>
        <tbody class="border-2">
            {#each data.existing as team}
                <tr class="text-w border border-slate-500">
                    <td><a href={`https://theorangealliance.org/events/${EVENT_KEY}/matches`} target="_blank">{team.matchid}</a></td>
                    <td class="inline-flex items-center">
                        <svg class="w-3 h-3 mr-1 mt-px">
                            <circle cx="5" cy="5" r="5" class={`fill-current ${(team.allianceColor === AllianceColor.red) ? "text-red-500" : "text-blue-600"}`}></circle>
                        </svg>
                        {team.teamid}
                    </td>
                    <td>
                        <span class={`px-2 rounded-md
                            ${(team.won) ?
                            "bg-green-500 text-green-950" :
                            "bg-red-500 text-black"}`}>
                            {(team.won) ? "Yes" : "No"}
                        </span>
                    </td>

                    <td class={`border-l border-slate-500
                        ${(!team.teamProp) ? "font-thin text-slate-500" : ""}`}>
                        {(team.teamProp) ? "Yes" : "No"}
                    </td>
                    <td class={`${(!team.autoDrop) ? "font-thin text-slate-500" : ""} inline-flex items-center`}>
                        {#if team.autoYellow}
                            <svg class="w-3 h-3 mr-1 mt-px">
                                <circle cx="5" cy="5" r="5" class="fill-current text-yellow-400"></circle>
                            </svg>
                        {/if}
                        {team.autoDrop}
                    </td>
                    <td class={`${(!team.autoStage) ? "font-thin text-slate-500" : ""}`}>{team.autoStage}</td>
                    <td class={`${(!team.autoPark) ? "font-thin text-slate-500" : ""}`}>{(team.autoPark) ? "Yes" : "No"}</td>
                    <td class={`${(!team.autoSpike) ? "font-thin text-slate-500" : ""} inline-flex items-center`}>
                        {#if (Number(team.autoSpike) - 10) > 0}
                            <svg class="w-3 h-3 mr-1 mt-px" fill="purple">
                                <circle cx="5" cy="5" r="5"></circle>
                            </svg>
                        {/if}
                        {
                            (((Number(team.autoSpike) - 10) === 1) || (Number(team.autoSpike) === 1)) ? "Left" :
                            (((Number(team.autoSpike) - 10) === 2) || (Number(team.autoSpike) === 2)) ? "Center" :
                            (((Number(team.autoSpike) - 10) === 3) || (Number(team.autoSpike) === 3)) ? "Right" : "N/A"
                        }
                    </td>
                    <td class={`${(!team.teleopDrop) ? "font-thin text-slate-500" : ""} border-l border-slate-500`}>{team.teleopDrop}</td>
                    <td class={`${(!team.teleopStage) ? "font-thin text-slate-500" : ""}`}>{team.teleopStage}</td>

                    <td class={`${(!team.endClimb) ? "font-thin text-slate-500" : ""} border-l border-slate-500`}>{(team.endClimb) ? "Yes" : "No"}</td>
                    <td class={`${(!team.endPark) ? "font-thin text-slate-500" : ""}`}>{(team.endPark) ? "Yes" : "No"}</td>
                    <td class={`${(Number(team.endDrone) > 3 || Number(team.endDrone) < 0) ? "font-thin text-slate-500" : ""}`}>
                        {
                            (team.endDrone === 0) ? "Field" :
                            (team.endDrone === 4) ? "Audience" :
                            (team.endDrone === 5) ? "N/A" : team.endDrone
                        }
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<div class="sm:hidden text-w text-center">
    Phone Landscape To See Data
</div>