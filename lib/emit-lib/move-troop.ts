import type { MoveTroopTypeEmit } from "../../src/core/emites/types"
import { GetGameData, road, WriteGameData } from "../core"


export const MoveTroopFn = (move: MoveTroopTypeEmit) => {
    if (move) {
        const data = GetGameData(move.idGame)

        const way = road(move.startPosition, move.endPosition)
        let indexMove = data.historystep.troops.findIndex((item) => item.idTroop == move.idTroop)

        if (indexMove !== -1) {
            data.historystep.troops = data.historystep.troops.filter((elem, index) => index !== indexMove)
        }

        data.historystep.troops = [...data.historystep.troops, {
            way,
            currentStep: 0,
            idTroop: move.idTroop
        }]

        WriteGameData(move.idGame, data)
    }
}