// MODULE PATH
// Permet de construire des chemins de fichiers et de répertoires compatibles avec l'OS.

const { resolve, basename, extname } = require("path");

console.log(resolve("."));
console.log(basename(__filename));
console.log(extname(__filename));
