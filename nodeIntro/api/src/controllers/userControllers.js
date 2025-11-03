
const conectarBanco = require('../db/connection')

const jwt = require('jsonwebtoken')

let conectado 

async function conectandoBanco() {

   conectado = await conectarBanco()
    
}

conectandoBanco()



// adicionar 
 
async function adicionarUser(req,res) {

    const {nome, idade,senha} = req.body

    if(!nome || !idade||!senha){

         res.status(404).json("Todos os campos são obrigatórios")
    }

    try{
    const [result] = await conectado.query('INSERT INTO usuario(nome,idade,senha) VALUES(?,?,?)',[nome,idade,senha]) 

    
     res.status(201).json({ok:true,result: result })



    }catch(err){
        res.status(404).json({ok: false, result: err, mensagem:"Usuário não foi cadastrado"})

    }

    
}


async function deletarUser(req,res) {

    const {id} = req.params

    try {
        const [result] = await conectado.query('DELETE FROM usuario WHERE id= ?',[id])

        res.status(201).json({ok: true, result: result})
    } catch (err) {
        res.status(404).json({ok: false, result: err, mensagem:"Usuário não foi deletado"})
    }
    
}

async function pesguisarUser(red,res) {

    const {id} = red.params

    try {
        const [result] = await conectado.query('SELECT nome,idade FROM usuario WHERE id = ?',[id])

        res.status(201).json({ok: true, result: result})
        
    } catch (err) {
        res.status(404).json({ok: false, result: err, mensagem:"Usuário não encontrado"})
    }

}


async function pesguisarUsers(req,res) {

     try {
        const [result] = await conectado.query('SELECT nome,idade FROM usuario')

        res.status(201).json({ok: true, result: result})
        
    } catch (err) {
         res.status(404).json({ok: false, result: err, mensagem:"Usuários não encontrado"})
    }
    
}


async function mudarDadosUser(req,res) {

    const {id} = req.params

    const {nome,idade,senha} = req.body

    if (!nome||!idade|| senha) {
        
        return res.status(400).json({ok: false, result:{}, mensagem: "Preencha os campos todos os campos"})
    }

    try {

        const [result] = await conectado.query('UPDATE usuario SET nome = ? SET idade = ? SET senha = ? WHERE id = ? && senha = ?' ,[nome,idade,senha,id,senha])

        res.status(201).json()
    } catch (err) {
        res.status(400).json({ok: false, result:{}, mensagem: "Usuário ou senha inválidos"})
    }
    
}


async function loginUser(req,res) {

    const secretToken = 'testando'
    const {userName, senha} = req.body

    try {
        

        const [result] = await conectado.query('SELECT id, username FROM test WHERE username = ? AND senha = ? ',[userName,senha])
        
        if (result.length ===0) {
            return res.status(404).json({mensagem: "usuario ou senha incorretos", result})            
        }

        const payload= {
            id: result[0].id,
            nome: result[0].nome,
            role: 'user'
        }


        const token =  jwt.sign(payload,secretToken,{expiresIn:'1h'})

        res.status(200).json({mensagem:'Usuario logado', result: result[0], token})


    } catch (error) {

        console.error(error)

        return res.status(404).json({mensagem:"erro ao tentar acessar o login", result:error})
        
    }
    
}



module.exports = {
    adicionarUser,
    deletarUser,
    pesguisarUser,
    pesguisarUser,
    pesguisarUsers,
    mudarDadosUser,
    loginUser

}