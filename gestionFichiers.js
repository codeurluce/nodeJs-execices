const fs = require('fs')

// Creation de fichier avec Js --------------------------------------------
// if (fs.existsSync('./monFichier')) {
//     fs.rmdir('./monFichier', (erreur) => {
//         if (erreur) {
//             console.log(erreur)
//         } else {
//             console.log('votre dossier a ete supprimé')
//         }
//     })
// } else {

//     fs.mkdir('./monFichier', (erreur) => {
//         if (erreur) {
//             console.log(erreur);
//         } else {
//             console.log('dossier créé avec succes')
//         }
//     });
// }

// creation de fichiers avec NodeJs ----------------------

fs.writeFile('./monFichier/fichier1.txt', 'Bonjour ! je developpe en Node.Js', () =>{
    console.log('fichier crée avec succés !')
});

// Lecture de fichiers avec NodeJs ----------------------

fs.readFile('./monFichier/fichier1.txt', (erreur, donnee)=> {
    if(erreur){
        console.log(erreur);
    }else{
        console.log(donnee.toString());
    }
})

// suppression de fichier avec node js ----------------------

if(fs.existsSync('./monFichier/fichier1.txt')){
    fs.unlink('./monFichier/fichier1.txt', (erreur)=> {
        if (erreur){
            console.log(erreur);
            
        }else{
            console.log('suppression reussi')
        }
    })
}else{
    console.log('impossible de supprimer un fichier inexistant')
}