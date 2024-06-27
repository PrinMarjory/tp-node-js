//MODULE READLINE
//Permet de lire les entrées de l'utilisateurs et d'interagir avec lui.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Quel est votre nom ? ", (name) => {
    console.log(`Bonjour ${name} !`);
    rl.close();
});