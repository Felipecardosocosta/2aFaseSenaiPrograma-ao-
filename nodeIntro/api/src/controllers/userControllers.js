
const conectarBanco = require('../db/connection')

const jwt = require('jsonwebtoken')

let conectado

async function conectandoBanco() {

    conectado = await conectarBanco()

}

conectandoBanco()



// adicionar 

async function adicionarUser(req, res) {

    const { nome, idade, senha } = req.body

    if (!nome || !idade || !senha) {

        res.status(404).json("Todos os campos são obrigatórios")
    }

    try {
        const [result] = await conectado.query('INSERT INTO usuario(nome,idade,senha) VALUES(?,?,?)', [nome, idade, senha])


        res.status(201).json({ ok: true, result: result })



    } catch (err) {
        res.status(404).json({ ok: false, result: err, mensagem: "Usuário não foi cadastrado" })

    }


}


async function deletarUser(req, res) {

    const { id } = req.params

    try {
        const [result] = await conectado.query('DELETE FROM usuario WHERE id= ?', [id])

        res.status(201).json({ ok: true, result: result })
    } catch (err) {
        res.status(404).json({ ok: false, result: err, mensagem: "Usuário não foi deletado" })
    }

}

async function pesguisarUser(red, res) {

    const { id } = red.params

    try {
        const [result] = await conectado.query('SELECT nome,idade FROM usuario WHERE id = ?', [id])

        res.status(201).json({ ok: true, result: result })

    } catch (err) {
        res.status(404).json({ ok: false, result: err, mensagem: "Usuário não encontrado" })
    }

}


async function pesguisarUsers(req, res) {

    try {
        const [result] = await conectado.query('SELECT nome,idade FROM usuario')

        res.status(201).json({ ok: true, result: result })

    } catch (err) {
        res.status(404).json({ ok: false, result: err, mensagem: "Usuários não encontrado" })
    }

}


async function mudarDadosUser(req, res) {

    const { id } = req.params

    const { nome, idade, senha } = req.body

    if (!nome || !idade || senha) {

        return res.status(400).json({ ok: false, result: {}, mensagem: "Preencha os campos todos os campos" })
    }

    try {

        const [result] = await conectado.query('UPDATE usuario SET nome = ? SET idade = ? SET senha = ? WHERE id = ? && senha = ?', [nome, idade, senha, id, senha])

        res.status(201).json()
    } catch (err) {
        res.status(400).json({ ok: false, result: {}, mensagem: "Usuário ou senha inválidos" })
    }

}


async function loginUser(req, res) {

    const secretToken = 'testando'
    const { userName, senha } = req.body

    try {


        const [result] = await conectado.query('SELECT id, username FROM test WHERE username = ? AND senha = ? ', [userName, senha])

        if (result.length === 0) {
            return res.status(404).json({ mensagem: "usuario ou senha incorretos", result })
        }

        const payload = {
            id: result[0].id,
            nome: result[0].nome,
            role: 'user'
        }


        const token = jwt.sign(payload, secretToken, { expiresIn: '1h' })

        res.status(200).json({ mensagem: 'Usuario logado', result: result[0], token })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "erro ao tentar acessar o login", result: error })

    }

}

async function buscarTodosEventos(req, res) {

    try {

        const [result] = await conectado.query(`
            SELECT 
                evento.id_evento,
                usuario.nome AS nome_usuario,
                usuario.id_usuario,
                evento.data_evento AS 'data',
                evento.horario AS horario,
                evento.ponto_de_encontro AS pontoEncontro,
                evento.vagas AS vagas,
                trilha.nome AS nomeTrilha,
                trilha.ponto_partida,
                trilha.ponto_chegada,
                trilha.dificuldade,
                trilha.distancia,
                participante.descricao
            FROM participante
            JOIN evento ON evento.id_evento = participante.evento_id
            JOIN usuario ON participante.usuario_id = usuario.id_usuario
            JOIN trilha 
            ON trilha.id_trilha = evento.trilha_id
            ORDER BY evento.id_evento;`)

        if (result.length === 0) {
            return res.status(404).json({ mensagem: "eventos nao encontrados", result })
        }

        const idEventos = [...new Set(result.map(consulta => consulta.id_evento))]


        const eventos = idEventos.map(id=>{

            const evento = result.filter(evento=> evento.id_evento === id)

            const participante = evento.filter(consulta=> consulta.descricao==="PARTICIPANTE").map(evento=> ({nome:evento.nome_usuario, id: evento.id_usuario}))

            
            
            

            const c = evento.find(evento=> evento.descricao ==="CRIADOR")

            const  e = evento[0]

            return {
                nomeTrilha: e.nomeTrilha,
                distancia: e.distancia,
                dificuldade: e.dificuldade,
                pontoInicial: e.ponto_partida,
                pontoFinal : e.ponto_chegada,
                pontoEncontro: e.pontoEncontro,
                participante,
                criador: {nome: c.nome_usuario, id:c.id_usuario}
            }


        })
        
        res.status(200).json({ mensagem: "eventos encontrados", eventos })
        

    } catch (err) {

    }

}



module.exports = {
    adicionarUser,
    deletarUser,
    pesguisarUser,
    pesguisarUser,
    pesguisarUsers,
    mudarDadosUser,
    loginUser,
    buscarTodosEventos

}