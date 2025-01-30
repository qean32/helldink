import { GetGameData, WriteGameData } from '../src/components/lib'
import { EmitNames } from '../src/core/emites'
import type { GameDataType } from '../src/core/emites/types'

export const CreateEntity = (socket: any, { payload, entity, gameId }: { payload: any[], entity: EntityPayloadType, gameId: string | number }) => {
    let data: GameDataType = GetGameData()
    data = {
        ...data,
        [entity]: [
            ...data?.[entity],
            ...payload
        ]
    }

    payload.forEach((item, index) =>
        socket.to(payload[index].gameId).emit(EmitNames.CrateEntity_, { item, entity }))

    WriteGameData(gameId, data)
}

export type EntityPayloadType = 'troops' | 'castles'