const express = require('express')

const router = express.Router()

const { adicionarUser,
    pesguisarUser,
    pesguisarUsers,
    mudarDadosUser,
    deletarUser,
    loginUser
} = require('../controllers/userControllers')

router.post('/add', adicionarUser)

router.get('/', pesguisarUsers)

router.get('/pesq/:id', pesguisarUser)

router.put("/mudar/:id", mudarDadosUser)

router.delete("/deletar/:id", deletarUser)

router.get('/login',loginUser)

module.exports = router