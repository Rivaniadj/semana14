const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')



// READ_ listar todos os estudios/get/find
 router.get('/',controller.getAll) 

//criar um novo estudio/post/save
 router.post('/', controller.createStudio )

 //atualizar uma informacao especifica num estudio/patch/findById/save
 router.patch('/:id', controller.updateOne)

//Deleta estudio : delete/findById
router.delete('/:id', controller.deletaEstudio)

module.exports = router