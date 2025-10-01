const express = require('express') //Importa o express
const router = express.Router() // Cria o Router como "método" do express
const produtoController = require('../Controllers/produtoController'); //Passa o caminho do controller

//Criação das rotas
router.get('/', produtoController.listarProdutos); 
router.post('/', produtoController.criarProdutos);
router.get('/:id', produtoController.buscarProdutosPorId);

module.exports = router;
