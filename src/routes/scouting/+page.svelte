<svelte:head>
    <title>Cerberus | Scouting</title>
</svelte:head>

<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

console.log(data.event);

</script>

<p class="text-w">{data.event}</p>