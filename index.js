const express = require('express');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(_dirname, '/view'));

app.listen(8001, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});


bodyParser = require('body-parser');
app.use(bodyParser.uprlencoded({ extended: true}));

var consign = require('consign');
consign().include('controller/routes', ).into(app);