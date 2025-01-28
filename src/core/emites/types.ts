import type { Castle, Troop } from "../entities/core.entities"
import type { positionType } from "../model/core.type"

export type GameDataType = {
    game: {
        id: number | string,
        pouse: true
    },
    troops: Troop[],
    castles: Castle[],
    historystep: {
        troops: Troop[],
        castles: Castle[],
    },
    step: {
        troops: Troop[],
        castles: Castle[],
    }
}

export type GameType = {
    pause: boolean,
    id: string
}

export type MoveTroopTypeEmit = {
    startPosition: positionType
    endPosition: positionType
    idTroop: number
    idGame: number | string
}