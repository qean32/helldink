<script lang="ts">
    import Point from "./point.svelte";

    export let countPoint: number = 936;
    export let top: number = 0;
    export let right: number = 0;
    let points: any = [];

    for (let index = 0; index < countPoint; index++) {
        points.push({
            value: 0,
            position: {
                x: ((Math.floor(index / 36) + 1) * 36 - index) * 50,
                y: (Math.floor(index / 36) + 1) * 50,
            },
            index,
        });
    }

    const click = () => console.log(points);
</script>

<div
    onclick={click}
    class="absolute grid_pointer z-10"
    style="top: 0px; left: {right}rem; "
>
    click
</div>

<div
    class="absolute grid_"
    style="top: {top}rem; left: {right}rem; padding: 50px"
>
    {#each points as _, index}
        <Point
            bind:points
            point={{
                ..._,
                position: {
                    x: ((Math.floor(index / 36) + 1) * 36 - index) * 50,
                    y: (Math.floor(index / 36) + 1) * 50,
                },
            }}
        />
    {/each}
</div>

<style>
    .grid_ {
        display: grid;
        grid-template-columns: repeat(36, 1fr);
        grid-template-rows: repeat(28, 1fr);
    }
</style>
