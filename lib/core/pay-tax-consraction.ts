import { Constractiion, House } from "../../src/core/entities/core.entities";
import { GetGameData } from "./get-game-data";

export const PayTaxConstraction = (consraction: Constractiion, house: House, gameId: number | string) => {
    let data = GetGameData(gameId)
    let newhouse: House = house
    newhouse = {
        ...house,
        [consraction.typePay]: house[consraction.typePay] += 10 * consraction.multiplerPay
    }

    data.houses = [
        ...data.houses.filter((house_: House) => house_.id != house.id),
        newhouse
    ]
}
