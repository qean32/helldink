<script lang="ts">
    export let countPoint: number = 0;
    export let top: number = 0;
    export let right: number = 0;
    let arr = [];

    for (let index = 0; index < countPoint; index++) {
        arr.push(index);
    }

    import SeaPoint from "./sea-point.svelte";
</script>

<div class="absolute" style="top: {top}rem; right: {right}rem">
    {#each arr as _, index}
        <SeaPoint />
    {/each}
</div>

<style lang="postcss">
</style>
