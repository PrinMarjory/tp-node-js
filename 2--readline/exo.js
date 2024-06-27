/* EXERCICE READLINE
1/ Le programme doit me proposer d'écrire une ligne
2/ Le programme doit afficher la ligne que je viens de lui donner
3/ On recommence à 1/ tant que le mot exit n'est pas entré */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function askQuestion() {
    rl.question("Entrez votre texte (ou 'exit' pour stopper le programme) : ", (ligne) => {
        if (ligne == "exit") {
            rl.close();
        } else {
            console.log(`Vous avez entré : ${ligne}`);
            askQuestion();  
        }
    });
}

askQuestion();
