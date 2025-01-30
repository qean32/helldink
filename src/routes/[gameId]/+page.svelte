<script lang="ts">
    import { useStore } from "../../components/lib/use-store";
    import {
        type socketStoreType,
        gameStore,
        socketStore,
    } from "../../components/store";
    import { Troop, Map } from "../../components/ui";
    import { EmitNames } from "../../core/emites";
    import "../../app.css";
    import type { GameDataType } from "../../core/emites/types";
    export let data;

    let troop: any;
    let store: socketStoreType = useStore(socketStore);

    store.connect(data.slug);
    store.socket.on(EmitNames.ConnectGameEmit, (data: GameDataType) => {
        gameStore.set(data);
        if (data.game) {
            troop = data.troops[0];
        }
    });

    store.socket.on(EmitNames.MoveTroopEmit_, (data: any) => {
        if (data.position) {
            troop.position = data.position;
        }
    });
</script>

<main>
    <Map />
    <Troop {troop} />
</main>
