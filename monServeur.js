const http = require('http');

const serveur = http.createServer((requete, reponse) => {
    // Definition de l'entete 
    reponse.setHeader("content-type", "text/html");

    // Definition de la reponse selon la demande du client
    reponse.write("<head><meta charset='utf8'><head>")
    if (requete.url === "/acceuil"){
        reponse.write("<h1>Acceuil</h1><p>Bienvenue sur l'acceuil<p>");
    } 
    else if (requete.url === "/profil"){
        reponse.write("<h1>Profil</h1><p>Bienvenue sur le profil<p>");
    }else {
        reponse.write("<h1>404 Page insdisponnible</h1><p>url incorrect<p>");
    }

    // Finalisation de la reponse à envoyer
    reponse.end();
});

serveur.listen(3001, "localhost", () => {
    console.log("pret à écouter les requêtes");
});