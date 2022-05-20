const usuarioBD = require('./db.js');
const seguranca = require('../components/seguranca');

async function selectUsuario(){
    const conn = await usuarioBD.connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}

async function getUsusarioId(id){

    const conn = await usuarioBD.connect();
    const sql = 'SELECT * FROM usuario WHERE id =?';
    const values = [id];
    const [rows] = await conn.query (sql, values);
    if (rows.legth > 0)
        return rows[0];
    else return null;   
}
async function login(nome, senha){
    const conn = await usuarioBD.connect();
    const sql = 'SELECT * FROM usuario WHERE nome=? and senha=?';
    const values = [nome, seguranca.ocultarsenha(senha) ];
    if (rows.legth > 0 )
        return rows;
    else return null;    
}
async function insertUsuarioId(usuario){
    const conn = await usuarioBD.connect();
    const sql = 'INSERT INTO usuario(nome, senha) VALUES (?,?);';
    const values = [usuario.nome, seguranca.ocultarsenha(usuario.senha)];
    return await conn.query(sql, values); 
}
async function deleteUsuario(id){
    const conn = await usuarioBD.connect();
    const sql = 'DELETE FROM ususario where id=?;';
    return await conn.query (sql, [id]);
}

