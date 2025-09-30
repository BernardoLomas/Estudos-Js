const produtos = [
    {nome: "Nike AirForce 1", preco: "R$800,00"},
    {nome: "Nike Mercurial Total 90", preco: "R$1000,00"},
    {nome: "Nike AirJordan 1", preco: "R$900,00"},
];

exports.listarProdutos = (req, res) => {
    console.log('listarProdutos chamado');
    res.render('lista', { produtos: produtos });
}

exports.criarProdutos = (req, res) => {
    const{nome, preco} = req.body
    res.send(`Produto criado: ${nome} | ${preco}`);
}

exports.buscarProdutosPorId = (req, res) => {
    const id = req.params.id;
    res.send(`Buscando produto com id: ${id}`);
}