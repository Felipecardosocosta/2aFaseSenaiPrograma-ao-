const express = require("express")

const mysql = require('mysql2')

const app = express()

const port = 3000

const conectar = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'crud_aula',
    user: "root",
    password: "senai"
})

conectar.connect()


app.get('/', (req, res) => {
    res.send("Ola Mundo!!!")
})

app.post('/cliente', async (req, res) => {

    const { nome, endereco, telefone, email } = req.body

    try {

        const [result] = await conectar.query(
            'INSERT INTO cliente(nome,endereco,telefone,email) VALUES(?,?,?,?)', [nome, endereco, telefone, email]
        )

        const [nome_cliente] = await conectar.query(`
            SELECT * FROM cliente WHERE id = ?
            `, [result.insertId])

        res.status(201).json((nome_cliente[0]))


    } catch (err) {
        console.error(err.message)
        res.status(500).json({ err: "" })
    }


})





app.listen(port)