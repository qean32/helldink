<!-- <script lang="ts">
    import "../app.css";
</script>

<main class="bg-black">main</main>
<a href="/32">гейм</a> -->

<script lang="ts">
    import "../app.css";
    import Troop from "../components/ui/troop.svelte";
    import { selectedObjectStore } from "../store/selectedObj";
    let obj: any;

    const selected = selectedObjectStore.subscribe((value) => {
        obj = value;
    });
    const click = () => {};

    // <!-- a2asd-->
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<main>
    <!-- svelte-ignore a11y_missing_attribute -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img src="./map/map.webp" onclick={click} />
    <Troop
        troop_={{
            country: 1,
            count: 410,
            experence: 0.3,
            name: "./fortess.svg",
            src_img: "wolf.svg",
            position: { x: 760, y: 1030 },
        }}
    />
    <Troop
        troop_={{
            country: 1,
            count: 700,
            experence: 0.3,
            name: "./fortess.svg",
            src_img: "lion.svg",
            position: { x: 760, y: 1250 },
        }}
    />
</main>
