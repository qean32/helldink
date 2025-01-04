import http from 'http';
import fs from 'fs';

const server = http.createServer(async (req, res) => {
    try {
        const index = fs.readFileSync('./index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(index);
    } catch (error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1 style="color:red;">${error.message}</h1>`);
    }
});

const PORT = 3001;
server.listen(PORT, 'localhost', () => {
    console.log(`server run on port ${PORT}`);
});