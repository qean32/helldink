import { sveltekit } from '@sveltejs/kit/vite'
import { type ViteDevServer, defineConfig } from 'vite'

import { Server } from 'socket.io'
import { EmitNames, EmitTypes } from './src/core/emites/'
import { GetGameData, road, WriteGameData } from './src/components/lib'

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return

		const io = new Server(server.httpServer)

		io.sockets.on('connection', function (socket) {
			console.log("A new user just connected");

			socket.on(EmitNames.Tik, () => {
				const data = GetGameData(54234342342)

				data.historystep.troops.forEach((item) => {
					item.currentStep += 1
					data.step.troops = [...data.step.troops, {
						idTroop: item.idTroop,
						position: item.way[item.currentStep],
					}]
				})

				WriteGameData(54234342342, data)
			})

			socket.on('join', (game: EmitTypes.GameType) => {
				socket.join(game.id);
				const data = GetGameData(game.id)

				socket.emit(EmitNames.ConnectGameEmit, data)
			})

			socket.on(EmitNames.MoveTroopEmit, (move: EmitTypes.MoveTroopTypeEmit) => {
				if (move) {
					const data = GetGameData(move.idGame)

					const way = road(move.startPosition, move.endPosition)
					let indexMove = data.historystep.troops.find((item) => item.idTroop == move.idTroop)

					if (indexMove) {
						indexMove = {
							way,
							currentStep: 0,
							idTroop: move.idTroop
						}
						return
					}

					data.historystep.troops = [...data.historystep.troops, {
						way,
						currentStep: 0,
						idTroop: move.idTroop
					}]

					WriteGameData(move.idGame, data)
				}
			})
		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
})
