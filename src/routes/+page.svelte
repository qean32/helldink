<script lang="ts">
    import {
        selectedObjectStore,
        type selectedObjectType,
    } from "../store/selectedObj";
    const clickHandler = (obj: selectedObjectType) => {
        selectedObjectStore.set(obj);
    };
    import "../app.css";
    import GridFill from "../components/shared/grid-fill.svelte";
</script>

<slot />

<main class="h-[100vh] flex justify-center items-center bg-gray-800">
    <span
        class="relative max-h-[664px] max-w-[664px] min-h-[664px] min-w-[500px] w-[500px]"
    >
        <img
            on:click={(e) =>
                clickHandler({
                    name: "aracher",
                    id: 500,
                    position: { x: e.x, y: e.y },
                })}
            src="./emblems/archer.svg"
            alt=""
            class="w-[56px] h-[56px] z-10 absolute top-12 left-6"
        />
        <img
            on:click={(e) =>
                clickHandler({
                    name: "bear",
                    id: 100,
                    position: { x: e.x, y: e.y },
                })}
            src="./emblems/bear.svg"
            alt=""
            class="w-[56px] h-[56px] z-10 absolute top-24 left-16"
        />
        <GridFill />
        <img src="map/map_1.svg" alt="" class="w-[500px]" />
    </span>
</main>
