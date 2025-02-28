const fs = require('fs')


if (fs.existsSync('./monFichier')) {
    fs.rmdir('./monFichier', (erreur) => {
        if (erreur) {
            console.log(erreur)
        } else {
            console.log('votre dossier a ete supprimé')
        }
    })
} else {

    fs.mkdir('./monFichier', (erreur) => {
        if (erreur) {
            console.log(erreur);
        } else {
            console.log('dossier créé avec succes')
        }
    });
}