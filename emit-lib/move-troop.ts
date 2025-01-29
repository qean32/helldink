import { GetGameData, road, WriteGameData } from "../src/components/lib"
import type { MoveTroopTypeEmit } from "../src/core/emites/types"

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