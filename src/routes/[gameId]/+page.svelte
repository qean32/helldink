<script lang="ts">
    import Troop from "../../components/ui/troop.svelte";
    import type { TroopInterface } from "../../core/model/type.payload";
    const troop_: TroopInterface = {
        country: 1,
        count: 40,
        experence: 0.3,
        name: "./fortess.svg",
        src_img: "wolf.svg",
        position: { x: 760, y: 1050 },
    };
</script>

<main>
    <img src="./map/map.webp" />
    <Troop {troop_} />
</main>
