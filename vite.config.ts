import { sveltekit } from '@sveltejs/kit/vite'
import { type ViteDevServer, defineConfig } from 'vite'

import { Server } from 'socket.io'
import { MoveTroopFn, TikFn } from './emit-lib/'
import { EmitNames, EmitTypes } from './src/core/emites/'
import { GetGameData } from './src/components/lib'

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return

		const io = new Server(server.httpServer)

		io.sockets.on('connection', function (socket) {
			socket.on(EmitNames.JoinEmit, (game: EmitTypes.GameType) => {
				socket.join(game.id);
				const data = GetGameData(game.id)
				socket.emit(EmitNames.ConnectGameEmit, data)
			})

			socket.on(EmitNames.Tik, () => {
				TikFn(socket)
			})

			socket.on(EmitNames.MoveTroopEmit, (move: EmitTypes.MoveTroopTypeEmit) => {
				MoveTroopFn(move)
			})
		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
})
