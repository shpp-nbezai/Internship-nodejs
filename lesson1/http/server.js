const http = require('http');
const url = require('url');
const server = http.createServer();
const port = 3000;
const hostname = '127.0.0.1';

server.on('request', (req, res) => {
    const queryParameters = url.parse(req.url, true).query;
    let message = '';

    if (queryParameters.name && queryParameters.age) {
        message = `${queryParameters.name} is ${queryParameters.age} years old`;
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(message);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Url parameters "name" or "age" not found');
    }
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});