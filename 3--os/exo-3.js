/* EXERCICE OS
1/ Le programme demande à l'utilisateur quelle info il veut sur son OS
2/ Le programme lui affiche l'info et repart en 1/ tant que 'exit' nest pas entré */

const rl = require("../2--readline/readlineModule");
const os = require("os");

function askInfo() {
    rl.question("Quelle information voulez-vous sur votre système d'exploitation? (Tapez 'exit' pour quitter) : ", (input) => {
        if (input.toLowerCase() === 'exit') {
            return rl.close();
            
        }

        switch (input.toLowerCase()) {
            case 'hostname':
                console.log(`Nom de l'hôte : ${os.hostname()}`);
                break;
            case 'type':
                console.log(`Type de système d'exploitation : ${os.type()}`);
                break;
            case 'platform':
                console.log(`Plateforme : ${os.platform()}`);
                break;
            case 'arch':
                console.log(`Architecture du processeur : ${os.arch()}`);
                break;
            default:
                console.log("Information non valide. Veuillez entrer 'hostname', 'type', 'platform', 'arch' ou 'exit'.");
                break;
        }

        askInfo(); 
    });
}

askInfo();