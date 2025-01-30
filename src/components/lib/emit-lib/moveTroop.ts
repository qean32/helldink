import { EmitNames, EmitTypes } from "../../../core/emites";
import type { GameDataType } from "../../../core/emites/types";
import { type selectedObjectType, selectedObjectStore, type socketStoreType, socketStore, gameStore } from "../../store";
import { useStore } from "../use-store";


export const moveTroop = (event: any) => {
    let selected_obj: selectedObjectType = useStore(selectedObjectStore);
    let store: socketStoreType = useStore(socketStore);
    let game: GameDataType = useStore(gameStore);
    if (selected_obj) {
        store.socket.emit(EmitNames.MoveTroopEmit, {
            startPosition: {
                x: selected_obj.position.x,
                y: selected_obj.position.y,
            },
            endPosition: { x: event.clientX, y: event.clientY },
            idGame: game.game.id,
            idTroop: selected_obj.id,
        } as EmitTypes.MoveTroopTypeEmit);
    }
}