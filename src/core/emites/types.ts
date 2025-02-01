import type { positionType } from "../entities/core.type"


export type MoveEmit = {
    way: positionType[],
    idTroop: number
    currentStep: number
}

export type MoveTroopTypeEmit = {
    startPosition: positionType
    endPosition: positionType
    idTroop: number
    idGame: number | string
}

export type GameType = {
    pause: boolean,
    id: string
}
