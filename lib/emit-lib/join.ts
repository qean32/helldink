import { EmitNames } from '../../src/core/emites'
import { GetGameData } from '../core';

export const JoinFn = (socket: any, gameId: string | number) => {
    socket.join(gameId);
    const data = GetGameData(gameId)
    socket.emit(EmitNames.ConnectGameEmit, data)
}