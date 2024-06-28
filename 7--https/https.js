const { createServer} = require('node:https');
const fs = require('node:fs');

const server = createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
})

server.on('request', (req, res) => {
    res.end('Welcome Https server.')
}) 

server.listen(443);
