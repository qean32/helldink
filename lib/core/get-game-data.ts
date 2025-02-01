import fs from 'fs'
import type { GameDataType } from '../../src/core/entities/core.entities'

export const GetGameData = (gameId: number | string = 54234342342): GameDataType => {
    const data = fs.readFileSync(`./data/games/game$${gameId}.json`, { encoding: 'utf8', flag: 'r' })
    return JSON.parse(data)
}