import { sveltekit } from '@sveltejs/kit/vite'
import { type ViteDevServer, defineConfig } from 'vite'

import { Server } from 'socket.io'
import { EmitNames, EmitTypes } from './src/core/emites/'
import { GetGameData, road } from './src/components/lib'

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return

		const io = new Server(server.httpServer)

		io.sockets.on('connection', function (socket) {
			console.log("A new user just connected");

			socket.on(EmitNames.Tik, () => {
				// 54234342342
				const data = GetGameData(54234342342)
			})

			socket.on('join', (game: EmitTypes.GameType) => {
				socket.join(game.id);
				const data = GetGameData(game.id)

				socket.emit(EmitNames.ConnectGameEmit, JSON.parse(data))
			})

			socket.on(EmitNames.MoveTroopEmit, (move: EmitTypes.MoveTroopTypeEmit) => {
				const data = GetGameData(move.idGame)

				const way = road(move.startPosition, move.endPosition)
				data
			})
		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
})
