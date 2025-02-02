import { Country, House } from "../../src/core/entities/core.entities";
import { GetGameData } from "./get-game-data";
import { WriteGameData } from "./write-game-data";

export const PayTaxHouse = (gameId: number | string, country: Country) => {
    let data = GetGameData(gameId)
    let newhouses: House[] = []
    let leaderHouse: House = data.houses.find((house: House) => house.id == country.leader)

    country.houses.forEach(house => {
        let newhouse: House = data.houses.find((house_: House) => house_.id == house)
        leaderHouse = {
            ...leaderHouse,
            food: newhouse.food,
            gold: newhouse.gold,
            wood: newhouse.wood,
            stone: newhouse.stone
        }

        newhouse.food -= 10
        newhouse.gold -= 10
        newhouse.wood -= 10
        newhouse.stone -= 10

        newhouses.push(newhouse)
        data.houses = [
            ...data.houses.filter(house => house.id != newhouse.id || house.id != leaderHouse.id)
        ]
    })

    newhouses.push(leaderHouse)
    data.houses = [
        ...data.houses,
        ...newhouses
    ]

    WriteGameData(gameId, data)
}
