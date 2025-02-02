<script lang="ts">
    import { grid } from "./grid";
    import Point from "./point.svelte";
    export let top: number = 0;
    export let right: number = 0;
    let points: any = grid;
</script>

<div
    class="absolute grid_"
    style="top: {top}rem; left: {right}rem; padding: 50px"
>
    {#each points as point}
        <Point {point} />
    {/each}
</div>

<style>
    .grid_ {
        display: grid;
        grid-template-columns: repeat(36, 1fr);
        grid-template-rows: repeat(28, 1fr);
    }
</style>
