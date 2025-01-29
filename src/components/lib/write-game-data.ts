import fs from 'fs'
import type { GameDataType } from '../../core/emites/types'

export const WriteGameData = (gameId: number | string, data_: GameDataType): void => {
    fs.writeFileSync(`./data/games/game$${gameId}.json`, JSON.stringify(data_))
}