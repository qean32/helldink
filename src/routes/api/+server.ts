import fs from 'fs'
import path from 'path'

export async function GET() {
    const data = fs.readFileSync('./data/index.txt', { encoding: 'utf8', flag: 'r' })
    console.log(JSON.parse(data))
    return new Response(data)
}