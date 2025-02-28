const http = require('http');
const fs = require('fs')

const serveur = http.createServer((requete, reponse) => {
    // Definition de l'entete 
    reponse.setHeader("content-type", "text/html");

    // Definition de la reponse selon la demande du client
    let fichier ='';
    if (requete.url === "/acceuil"){
        fichier = './HTML/acceuil.html'
    } 
    else if (requete.url === "/profil"){
        fichier = './HTML/profil.html'
    }else {
        fichier = './HTML/erreur.html'
    }

    fs.readFile(fichier, (erreur, donnée) =>{
        if (erreur){
            console.log(erreur)
            reponse.end()
        }else{
            reponse.end(donnée)
        }
    })
});

serveur.listen(3001, "localhost", () => {
    console.log("pret à écouter les requêtes");
});