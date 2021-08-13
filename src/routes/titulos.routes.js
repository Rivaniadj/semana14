const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')

//busca titulo por id
router.get('/:id', controller.getId)

//listar todos os titulos/get/find
router.get('/', controller.getAll)
//ler todos os títulos da Marvel/ get/finds
router.get('/marvel', controller.mostrarTituloMarvel)

//ler todos os títulos da Ghibli/ get/find
router.get('/glibli', controller.mostrarTituloGhibli)

// ler todos os títulos da Pixar/ get/find
router.get('/pixar', controller.getAllPixar)

//criar um novo titulo/post/save
router.post('/', controller.createTitle)

//atualizar uma informacao especifica num titulo/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um titulo/delete/findById/remove
router.delete('/:id', controller.deletaTitulo)


module.exports = router