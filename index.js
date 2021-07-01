const express = require('express');// creer server express
const app = express();// instance,
const db = require('./db'); // importer la base de donne
const PORT = process.env.PORT || 3000;

//alumage du server il prend deux paramettre
// POST pour envoyer sur LE SERVER GET pour recupere sur le server
app.get('/',function(req, res){
    res.status (200)
    res.json({status: 200, content:db })
})

app.get('/home',function(req, res){
    res.status (200)
    res.json({status: 200, content:db })
})

app.use((req,res, next) =>{
    res.status (404)
    res.json({status: 404, message: "la route n'existe pas" })
    next();
})
app.listen(PORT, () => {
    console.log(`application en marche sur ${PORT}`);
    console.log(db);
    
})