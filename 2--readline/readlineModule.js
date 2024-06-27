const readline = require("readline");

function createInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
}

module.exports = createInterface;