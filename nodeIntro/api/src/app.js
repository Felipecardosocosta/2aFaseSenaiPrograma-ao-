const express = require('express')

const routas = require('./routes/userRoutes')

const cors = require('cors')


const app = express()

app.use(cors({origin:'http://localhost:5173'}))

app.use(express.json())

app.use('/users', routas)

module.exports = app