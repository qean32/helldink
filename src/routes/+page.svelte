<script lang="ts">
    import { Troop, Map } from "../components/ui";
    import '../app.css'
</script>

<main>
    <Map />
    <Troop
        troop_={{
            country: 1,
            count: 410,
            experence: 0.3,
            name: "./fortess.svg",
            src_img: "deer.svg",
            position: { x: 760, y: 1030 },
        }}
    />
    <Troop
        troop_={{
            country: 1,
            count: 700,
            experence: 0.3,
            name: "./fortess.svg",
            src_img: "horse.svg",
            position: { x: 760, y: 1250 },
        }}
    />
</main>
