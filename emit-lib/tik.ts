import { GetGameData, WriteGameData } from "../src/components/lib"
import { EmitNames } from "../src/core/emites"

export const TikFn = (socket: any) => {
    const data = GetGameData(54234342342)

    data.step.troops.forEach((item) => {
        socket.to('54234342342').emit(EmitNames.MoveTroopEmit_, item)

        const idTroop = item.idTroop
        const troop = data.troops.find((item_) => item_.id == idTroop)
        if (troop && item.position) {
            troop.position = item.position
        }
    })
    data.step.troops = []

    data.historystep.troops.forEach((item, index) => {
        data.historystep.troops[index].currentStep += 1
        data.step.troops = [...data.step.troops, {
            idTroop: item.idTroop,
            position: item.way[item.currentStep],
        }]

        if (data.historystep.troops[index].currentStep == item.way.length + 1) {
            data.historystep.troops = data.historystep.troops.filter((elem, index_) => index_ !== index)
        }
    })

    WriteGameData(54234342342, data)
}