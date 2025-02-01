import fs from 'fs'
import type { GameDataType } from '../../src/core/entities/core.entities'

export const WriteGameData = (gameId: number | string, data_: GameDataType): void => {
    fs.writeFileSync(`./data/games/game$${gameId}.json`, JSON.stringify(data_))
}