import { GetGameData } from "../src/components/lib"
import type { GameType } from "../src/core/emites/types"
import { EmitNames } from '../src/core/emites/'

export const JoinFn = (socket: any, game: GameType) => {
    socket.join(game.id);
    const data = GetGameData(game.id)
    socket.emit(EmitNames.ConnectGameEmit, data)
}