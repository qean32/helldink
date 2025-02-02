import { Troop } from "../../src/core/entities/core.entities"
import { GetGameData } from "./get-game-data"

export const createFightTroopToTroop = (gameId: number | string, troop1: number, troop2: number) => {
    let data = GetGameData(gameId.toString())

    let troop_ = data.troops.filter(troop => troop.id == troop1)
    let troop__ = data.troops.filter(troop => troop.id == troop2)

    data.troops = {
        ...data.troops.filter(troop => troop.id != troop1 || troop.id != troop2)
    }

    data.fights = [
        ...data.fights,
        {
            step: 1,
            army_1: troop_,
            army_2: troop__
        }
    ]
}
