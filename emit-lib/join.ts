import { GetGameData } from "../src/components/lib"
import type { GameType } from "../src/core/emites/types"
import { EmitNames } from '../src/core/emites/'

export const JoinFn = (socket: any, gameId: string | number) => {
    socket.join(gameId);
    const data = GetGameData(gameId)
    socket.emit(EmitNames.ConnectGameEmit, data)
}