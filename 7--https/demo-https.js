//COMMANDE POUR GENERER LE CERTIFICAT ET LA CLE
//npx gentls
//npx gentls -h

const http = require("http");
const https = require("https");
const { readFileSync } = require("fs");
const { resolve } = require("path");

function app(req, res) {
  res.statusCode = 500;
  res.setHeader("Content-Type", "application/json");
  res.end("<h1>Bienvenue</h1>");
}

http.createServer((req, res) => {/* redirection sur https */}).listen(8080);
https
  .createServer(
    {
      cert: readFileSync(resolve("ssl", "default.crt")),
      key: readFileSync(resolve("ssl", "default.key")),
    },
    app
  )
  .listen(4433);