import fs from 'fs'
import type { GameDataType } from '../../core/emites/types'

export const GetGameData = (gameId: number | string): GameDataType => {
    const data = fs.readFileSync(`./data/games/game$${gameId}.json`, { encoding: 'utf8', flag: 'r' })
    return JSON.parse(data)
}