import { generateID } from "../../src/components/lib";
import { Troop } from "../../src/core/entities/core.entities";
import { GetGameData } from "./get-game-data";
import { WriteGameData } from "./write-game-data";

export const unficationTroop = (troop: Troop, troop_: Troop, gameId: number | string) => {
    let data = GetGameData(gameId.toString())

    data.troops = [
        ...data.troops.filter((troop__) => troop__.id != troop.id && troop__.id != troop_.id)
    ]

    WriteGameData(gameId, data)
}
