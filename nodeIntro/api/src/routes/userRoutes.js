const express = require('express')

const router = express.Router()

const { adicionarUser,
    pesguisarUser,
    pesguisarUsers,
    mudarDadosUser,
    deletarUser
} = require('../controllers/userControllers')

router.post('/add', adicionarUser)

router.get('/', pesguisarUsers)

router.get('/pesq/:id', pesguisarUser)

router.put("/mudar/:id", mudarDadosUser)

router.delete("/deletar/:id", deletarUser)

module.exports = router