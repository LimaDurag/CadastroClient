const express = require('express');
//nodemon index.js
const app = express();

app.get("/", function(req, resp){
    resp.send("bem-vindo ao meu app");
})

app.get("/contato", function(req, resp){
    resp.send("Pagina de contato do meu app");
})

app.get("/produto", function(req, resp){
    resp.send("pagina de produto do meu app");
})

app.get("/dados/:nome/:cargo", function(req, resp){
    resp.send("<h1>Ola sr(a). "+req.params.nome+"</h1><h2>Seu cargo é: "+req.params.cargo+"</h2>");
})

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(_dirname, '/view/' ));

var consign = require('consign');
consign().include('controller/routes', ).into(app);

bodyParser = require('body-parser');
app.use(bodyParser.uprlencoded({ extended: true}));

// Sempre na ultima linha
app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});