import type { positionType } from "../model/core.type"

export type GameType = {
    pause: boolean,
    id: string
}

export type MoveTroopTypeEmit = {
    startPosition: positionType
    endPosition: positionType
    idTroop: number
}