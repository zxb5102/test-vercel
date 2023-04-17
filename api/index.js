const http = require('http');

const server = http.createServer((req, resp) => {

    resp.end(JSON.stringify({
        url: req.url,
        method: req.method
    }));
})

server.listen(80);

module.exports = server;

