import type { Castle, Troop } from "../entities/core.entities"
import type { positionType } from "../model/core.type"

export type GameDataType = {
    game: {
        id: number | string,
        pause: true
    },
    troops: Troop[],
    castles: Castle[],
    historystep: {
        troops: MoveEmit[],
        castles: Castle[],
    },
    step: {
        troops: StepTroop[],
        castles: Castle[],
    }
}

type MoveEmit = {
    way: positionType[],
    idTroop: number
    currentStep: number
}

type StepTroop = {
    position: positionType,
    idTroop: number
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