const readlineInterface = require("./readlineModule");

const rl = readlineInterface()

console.log("Entrez autant de lignes souhaitées ('exit' pour quitter) :");

rl.on("line", (line) => {
    if (line === 'exit') {
        return rl.close();
    }
    console.log(`Ligne entrée: ${line}`);
});