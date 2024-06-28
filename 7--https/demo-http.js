const { createServer } = require("http");

const server = createServer((req, res) => {
    res.write("<h1>Bienvenue</h1>");
    res.end();
})

server.listen(3000);