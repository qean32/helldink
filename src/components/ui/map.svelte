<script lang="ts">
    import { io } from "socket.io-client";
    import { selectedObjectStore } from "../store";
    import { EmitNames, EmitTypes } from "../../core/emites";

    const socket = io();
    export const indexMap: number = 1;
    // let data: { slug: 54234342342 };

    socket.emit("join", {
        pause: false,
        id: "54234342342",
    });

    let selected_obj: any;

    const selected = selectedObjectStore.subscribe((value) => {
        selected_obj = value;
    });
    const click = () => {
        console.log(selected_obj)
        if (selected_obj.position) {
            socket.emit(EmitNames.MoveTroopEmit, {
                startPosition: { x: 1000, y: 700 },
                endPosition: { x: 1900, y: 1500 },
                idGame: "54234342342",
                idTroop: selected_obj.id,
            } as EmitTypes.MoveTroopTypeEmit);
        }
    };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<img src="./map/map${indexMap}.webp" class="map" onclick={click} />
