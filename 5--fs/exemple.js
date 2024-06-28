const fs = require('fs');
require("./ex--logs-utils");

const fileName = 'example.txt';
const init = 'Hello !';

// Écrire dans un fichier
fs.writeFile(fileName, init, 'utf8', (err) => {
    if (err) {
        console.error('Erreur lors de l\'écriture du fichier:', err);
        return;
    }
    console.log('Fichier écrit avec succès');

    // Lire le fichier
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier:', err);
            return;
        }
        console.log('Contenu du fichier:', data);

        // Ajouter du contenu au fichier
        const addText = '\nUne nouvelle ligne.';
        fs.appendFile(fileName, addText, 'utf8', (err) => {
            if (err) {
                console.error('Erreur lors de l\'ajout au fichier:', err);
                return;
            }
            console.log('Contenu ajouté avec succès');

            // Lire le fichier à nouveau
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    console.error('Erreur lors de la lecture du fichier:', err);
                    return;
                }
                console.log('Nouveau contenu du fichier:', data);

                // Supprimer le fichier
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.error('Erreur lors de la suppression du fichier:', err);
                        return;
                    }
                    console.log('Fichier supprimé avec succès');
                });
            });
        });
    });
});