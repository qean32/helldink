import { EmitNames } from "../../../core/emites";
import type { GameDataType } from "../../../core/entities/core.entities";
import { type socketStoreType, useStore, socketStore, gameStore } from "../../store";

export const SetALLGameData = (socket: any, gameId: number | string): void => {
    let store: socketStoreType = useStore(socketStore);

    store.connect(gameId.toString());
    store.socket.on(EmitNames.ConnectGameEmit, (data: GameDataType) => {
        gameStore.set(data);
    });
}

export type EntityPayloadType = 'troops' | 'castles' | 'houses'

