<script lang="ts">
    import { Troop, Map } from "../components/ui";
    import "../app.css";
    import type { TroopInterface } from "../core/model/type.payload";
    import { io } from "socket.io-client";
    import { EmitNames } from "../core/emites";
    import type { GameDataType } from "../core/emites/types";

    let troop_: any;
    const socket = io();
    socket.emit(EmitNames.JoinEmit, {
        pause: false,
        id: "54234342342",
    });

    socket.on(EmitNames.ConnectGameEmit, (data: GameDataType) => {
        if (data.game) {
            troop_ = data.troops[0];
        }
    });
    socket.on(EmitNames.MoveTroopEmit_, (data) => {
        if (data.position) {
            troop_.position = data.position;
        }
    });
</script>

<main>
    <Map />
    <Troop troop={troop_} />
</main>
