module.exports = function(app) {
    app.get('/login' , function(req,res){
        if(req.query.fail)
            res.render('usuario/login', { mensagemLogin:
                'usuario e/ou senha incorretos!'});
        else
            res.render('usuario/login', { mensagemLogin: null});        
                 
    })

    app.post('/login/executar' , (req, res) => {
        if( req.body.nome === "Gabriel Lima Germano"
        && req.Body.senha === "123456")
            res.render('/lista/usuario', {mensagem: 'cadastrado'});
        else
        res.render('/login/?fail=true');    
    });
}