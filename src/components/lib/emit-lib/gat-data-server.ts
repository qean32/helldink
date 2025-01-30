import type { GameDataType } from "../../../core/emites/types";
import type { Castle, Troop } from "../../../core/entities/core.entities";

export const PlaceData = (data: GameDataType): {
    troops: Troop[]
    castles: Castle[]
} => {
    const troops = data.troops
    const castles = data.castles

    return {
        troops,
        castles
    }
}