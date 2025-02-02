import { EmitNames } from '../../src/core/emites'
import { GetGameData, WriteGameData } from '../core'
import type { GameDataType } from '../../src/core/entities/core.entities'

export const CreateEntity = (socket: any, { payload, entity, gameId }: CreateEntityRarams) => {
    let data: GameDataType = GetGameData(gameId.toString())
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

export type EntityPayloadType = 'troops' | 'castles' | 'houses'
export type CreateEntityRarams = { payload: any[], entity: EntityPayloadType, gameId: string | number }

