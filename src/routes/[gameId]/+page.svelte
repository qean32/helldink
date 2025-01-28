<script lang="ts">
    export let data: any;
    import { Troop, Map, Castle } from "../../components/ui";

    import { io } from "socket.io-client";

    const socket = io();

    socket.on("news", function (message: any) {
        console.log(message);
    });
    socket.emit("my other event", { my: "data" });
    socket.emit("my other event", { my: "data___" });

    socket.on("my other event", function (message: any) {
        console.log(message);
    });
</script>

<main>
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
