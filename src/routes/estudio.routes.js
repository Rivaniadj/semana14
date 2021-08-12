const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')



// READ_ listar todos os estudios/get/find
 router.get('/',controller.getAll) 

//criar um novo estudio/post/save
 router.post('/', controller.createStudio )

 //atualizar uma informacao especifica num estudio/patch/findById/save
 router.patch('/:id', controller.updateOne)

//listar um estudio/get/findById

//deletar um estudio/delete/findById/remove

module.exports = router