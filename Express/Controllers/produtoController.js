exports.listarProdutos = (req, res) => {
    res.send("Listando todos os produtos...");
}

exports.criarProdutos = (req, res) => {
    const{nome, quantidade} = req.body
    res.send(`Produto criado: ${nome} | ${quantidade}`);
}

exports.buscarProdutosPorId = (req, res) => {
    const id = req.params.id;
    res.send(`Buscando produto com id: ${id}`);
}