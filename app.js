const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log(("requete effectué" + Date().toString()));
    next();
})

app.get("/accueil", (req, res)=> {
    res.status(200).sendFile("HTML/accueil.html", {root: __dirname})
});

app.get("/profil", (req, res) =>{
    res.status(200).sendFile("HTML/profil.html", {root: __dirname})
});

app.get("/", (req, res) =>{
    res.status(300).redirect("/accueil");
});

app.use((req, res) =>{
    res.status(404).sendFile("HTML/erreur.html", {root: __dirname});
});


app.listen(3001, ()=> {
    console.log('En attente des requêtes au port 3001');
    })
    console.log('erreur de la creation du serveur');
     