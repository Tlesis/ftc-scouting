<script lang="ts">
    import { scoutingData } from "$lib/stores";

    export let horizontal: boolean;
    export let purple: boolean;
    export let random: number;

</script>

{#if horizontal}
    <svg width=100% height=100%>
            {#if $scoutingData.autoRandom === random}
                <svg width="100%" height="100%" fill="white"><circle stroke="black" cx=25% cy=50% r=8/></svg>
            {/if}
            {#if purple}
                <svg width="100%" height="100%" fill="purple"><circle stroke="black" cx=75% cy=50% r=8/></svg>
            {/if}
    </svg>
{:else}
    <svg width=100% height=100%>
            {#if $scoutingData.autoRandom === random}
                <svg width="100%" height="100%" fill="white"><circle stroke="black" cx=50% cy=25% r=8/></svg>
            {/if}
            {#if purple}
                <svg width="100%" height="100%" fill="purple"><circle stroke="black" cx=50% cy=75% r=8/></svg>
            {/if}
    </svg>
{/if}
