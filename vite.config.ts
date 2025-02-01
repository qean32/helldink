import { sveltekit } from '@sveltejs/kit/vite'
import { type ViteDevServer, defineConfig } from 'vite'

import { Server } from 'socket.io'
import { CreateEntity, JoinFn, MoveTroopFn, TikFn } from './lib/emit-lib'
import { EmitNames, EmitTypes } from './src/core/emites/'
import type { EntityPayloadType } from './lib/emit-lib/cteate-entity'

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return
		const io = new Server(server.httpServer)

		io.sockets.on('connection', function (socket) {
			socket.on(EmitNames.JoinEmit, gameId => 		JoinFn(socket, gameId))
			socket.on(EmitNames.Tik, () => 					TikFn(socket))
			socket.on(EmitNames.MoveTroopEmit, move => 		MoveTroopFn(move))

			socket.on(EmitNames.CrateEntity, params => 		CreateEntity(socket, params))


		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
})
