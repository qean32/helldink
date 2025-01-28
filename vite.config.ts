import { sveltekit } from '@sveltejs/kit/vite'
import { type ViteDevServer, defineConfig } from 'vite'

import { Server } from 'socket.io'

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return

		const io = new Server(server.httpServer)

		io.sockets.on('connection', function (socket) {
			socket.send('hi');
			socket.emit('news', { hello: 'world' });
			socket.on('my other event', function (data) {
				console.log(data);
			});
			socket.emit('my other event', function (data: any) {
				console.log(data);
			});
		});
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
})
