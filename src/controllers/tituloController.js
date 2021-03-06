
const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getId = async (req, res) =>{
  const getTituloById = await Titulo.findById(req.params.id)
  Titulo.findOne({id:req.params.id},
    function(err){
      if(err){
        res.status(500).json({message: err.message})
      }else{
        res.status(200).json(getTituloById)
      }
    })
}

const getAll = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  res.status(200).json(titulos)
}

const createTitle = async (req, res) => {
  const titulo = new Titulo({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    genero: req.body.genero,
    descricao: req.body.descricao,
    estudio: req.body.estudio,
    criadoEm: req.body.criadoEm
  })
  //TODO : criar validação se filme já existe
  try {
    const novoTitulo = await titulo.save()
    res.status(201).json(novoTitulo)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}



const mostrarTituloMarvel = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
  
  res.json(titulosFiltrado)
}

const getAllPixar = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
  res.json(titulosFiltrados)
}
   const mostrarTituloGhibli = async (req, res) => {

     const titulos = await Titulo.find().populate('estudio')
       const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")

         return res.status(200).json(titulosFiltrado)
}

    const deletaTitulo = async (req, res) => {

       const encontraTitulo = await Titulo.findById(req.params.id)
         if (encontraTitulo == null) {
          return res.status(404).json({ message: 'Título não encontrado.' })
  }

  try {
    await encontraTitulo.remove()
      res.status(200).json({ message: 'Título deletado com sucesso' })
   } catch (err) {
       res.status(500).json({ message: err.message })
  }
}



const updateOne = async (req, res) => {

  try {
    
    const titulo = await Titulo.findById(req.params.id)
    
    if (titulo == null) {
      return res.status(404).json({ message: "titulo não foi encontrado" })
    }
    if (req.body.nome != null) {
        titulo.nome = req.body.nome
    }
    if (req.body.genero != null) {
        titulo.genero = req.body.genero
    }

    if (req.body.descricao != null) {
        titulo.descricao = req.body.descricao
    }
    
    const tituloAtualizado = await titulo.save()
       res.status(200).json(tituloAtualizado)

  } catch (err) {
    
    res.status(500).json({ message: err.message })
  }
}



















module.exports = {
  getId,
  getAll,
  createTitle,
  getAllPixar,
  mostrarTituloMarvel,
  mostrarTituloGhibli,
  deletaTitulo,
  updateOne
}