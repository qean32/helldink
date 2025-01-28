import { sveltekit } from '@sveltejs/kit/vite'
import { type ViteDevServer, defineConfig } from 'vite'
import fs from 'fs'

import { Server } from 'socket.io'
import { EmitNames, EmitTypes } from './src/core/emites/'

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return

		const io = new Server(server.httpServer)

		io.sockets.on('connection', function (socket) {
			console.log("A new user just connected");

			socket.on('join', (game: EmitTypes.GameType) => {
				if (!game.id) {
					return console.log('no game!!!');
				}
				socket.join(game.id);
				const data = fs.readFileSync(`./data/games/${game.id}.json`, { encoding: 'utf8', flag: 'r' })

				if (data) {
					return console.log('no game!!!');
				}
				socket.emit(EmitNames.ConnectGameEmit, JSON.parse(data))
			})

			socket.on(EmitNames.MoveTroopEmit, (message) => {
				if (message.user && (message.text)) {
					io.to(message.room).emit('newMessage', {});
				}
			})
		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
})
