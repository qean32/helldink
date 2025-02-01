<script lang="ts">
    import {
        type socketStoreType,
        gameStore,
        socketStore,
        useStore,
    } from "../../components/store";
    import { EmitNames } from "../../core/emites";
    import "../../app.css";
    import SeaPoint from "../../components/shared/core/sea-point.svelte";
    import { Troop, Map } from "../../components/shared/ui";
    import { SetALLGameData } from "../../components/lib/emit-lib";
    import type { GameDataType } from "../../core/entities/core.entities";
    export let data;

    let troops: any[];
    let store: socketStoreType = useStore(socketStore);
    let game: GameDataType = useStore(gameStore);
    SetALLGameData(store.socket, data.slug);

    store.socket.on(EmitNames.MoveTroopEmit_, (data: any) => {
        if (data.position) {
            const troop = game.troops.findIndex((item) => item.id == data.id);
            const troop_ = game.troops.find((item) => item.id == data.id);
            if (troop != -1) {
                // troops = [
                // { ...troop, position: data.position },
                // ...troops.filter((item) => item.id !== data.id),
                // ];
                // game.troops[troop] = { ...troop_, position: data.position };
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
    {#each game.troops as troop}
        <Troop {troop} />
    {/each}
</main>
