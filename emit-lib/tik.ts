import { GetGameData, WriteGameData } from "../src/components/lib"
import { EmitNames } from "../src/core/emites"
import fs from 'fs'
import type { GameType } from "../src/core/emites/types"

export const TikFn = (socket: any) => {
    const games: GameType[] = JSON.parse(fs.readFileSync('./data/index.json', 'utf-8'))
    games.forEach((game) => {
        if (!game.pause) {
            const data = GetGameData(game.id)

            data.historystep.troops.forEach((item) => {
                socket.to(game.id.toString()).emit(EmitNames.MoveTroopEmit_, {
                    position: item.way[item.currentStep],
                    id: item.idTroop
                })

                const idTroop = item.idTroop
                const troop = data.troops.find((item_) => item_.id == idTroop)
                if (troop && item.way[item.currentStep]) {
                    troop.position = item.way[item.currentStep]
                }
            })

            data.historystep.troops.forEach((item, index) => {
                if (data.historystep.troops[index]) {
                    data.historystep.troops[index].currentStep += 1

                    if (data.historystep.troops[index].currentStep == item.way.length + 1) {
                        data.historystep.troops = data.historystep.troops.filter((elem, index_) => index_ !== index)
                    }
                }
            })

            WriteGameData(54234342342, data)
        }
    })
}