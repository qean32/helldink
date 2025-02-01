import type { GameDataType } from "../../../core/entities/core.entities";
import { gameStore, useStore } from "../../store";

export const SetNewData = ({ entity, payload }: { entity: EntityPayloadType, payload: any }): void => {
    let data: GameDataType = useStore(gameStore)
    data = {
        ...data,
        [entity]: [
            ...data?.[entity],
            ...payload
        ]
    }

    gameStore.set(data)
}

export type EntityPayloadType = 'troops' | 'castles' | 'houses'