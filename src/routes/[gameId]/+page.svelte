<script lang="ts">
    export let data: any;
    import { Troop, Map, Castle } from "../../components/ui";

    import { io } from "socket.io-client";

    const socket = io();
    console.log(data)
    socket.emit("join", { name: "123123", room: data.slug });
    const go = () => {
        socket.emit("createMessage", {
            user: "123123",
            room: data.slug,
            text: "121312wqwqe",
        });
    };

    socket.on("newMessage", function (message) {
        console.log(message);
    });
</script>

<main>
    <p class="absolute" onclick={go}>game: {data.slug}</p>
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
