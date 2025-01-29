<script lang="ts">
    export let data: any;
    import '../../app.css'
    import { Troop, Map, Castle } from "../../components/ui";
</script>

<main>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <p class="absolute">game: {data.slug}</p>
    <Map />
    <Troop
        troop_={{
            country: 1,
            count: 410,
            experence: 0.3,
            name: "./fortess.svg",
            src_img: "deer.svg",
            position: { x: 600, y: 750 },
        }}
    />
    <Troop
        troop_={{
            country: 1,
            count: 700,
            experence: 0.3,
            name: "./fortess.svg",
            src_img: "horse.svg",
            position: { x: 400, y: 600 },
        }}
    />
    <Castle
        castel_={{
            country: 1,
            manufacture: null,
            multiplierDef: 0.3,
            name: "sa",
            position: { x: 460, y: 640 },
            src_img: "fortess.svg",
        }}
    />
</main>
