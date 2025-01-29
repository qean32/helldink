<script lang="ts">
    import { io } from "socket.io-client";
    import { selectedObjectStore } from "../store";
    import { EmitNames, EmitTypes } from "../../core/emites";

    const socket = io();
    export const indexMap: number = 1;
    let selected_obj: any;
    selectedObjectStore.subscribe((value) => {
        selected_obj = value;
    });

    const click = (e: any) => {
        console.log(selected_obj)
        if (selected_obj.position) {
            socket.emit(EmitNames.MoveTroopEmit, {
                startPosition: { x: selected_obj.position.x, y: selected_obj.position.y },
                endPosition: { x: e.clientX, y: e.clientY },
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
