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
    import SeaPoint from "../../components/shared/core/sea-point.svelte";
    export let data;

    let troops: any[];
    let store: socketStoreType = useStore(socketStore);

    store.connect(data.slug);
    store.socket.on(EmitNames.ConnectGameEmit, (data: GameDataType) => {
        gameStore.set(data);
        if (data.game) {
            troops = data.troops;
        }
    });

    store.socket.on(EmitNames.MoveTroopEmit_, (data: any) => {
        if (data.position) {
            console.log(troops);
            const troop = troops.findIndex((item) => item.id == data.id);
            const troop_ = troops.find((item) => item.id == data.id);
            if (troop != -1) {
                // troops = [
                // { ...troop, position: data.position },
                // ...troops.filter((item) => item.id !== data.id),
                // ];
                troops[troop] = { ...troop_, position: data.position };
            }
        }
    });
</script>

<main>
    <button
        onclick={() => {
            store.socket.emit(EmitNames.CrateEntity, {
                entity: "troops",
                payload: [
                    {
                        country: 1,
                        count: 4000,
                        experence: 0.3,
                        name: "./fortess.svg",
                        src_img: "octopus.svg",
                        id: 52,
                        position: {
                            x: 200,
                            y: 275,
                        },
                    },
                ],
                gameId: data.slug,
            });
        }}>qwedqwsaed</button
    >
    <SeaPoint />
    <Map />
    {#each troops as troop}
        <Troop {troop} />
    {/each}
</main>
