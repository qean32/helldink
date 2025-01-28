import fs from 'fs'

export const GetGameData = (gameId: number | string) => {
    const data = fs.readFileSync(`./data/games/${gameId}.json`, { encoding: 'utf8', flag: 'r' })
    return data
}