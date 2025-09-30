// Uma API deve ser capaz de fazer o CRUD = C: Create (criar), R: Read(ler), U: Update (atualizar), D: Delete(apagar)
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
const express = require('express') //Importação do módulo do express
const app = express() //Criação da variável app para uso do express
app.use(express.json())
const produtosRoutes = require('./Routes/produtosRoutes.Js');

app.get('/', (req, res) => { //Manda a requisição da aba '/' e retorna a resposta 'Hello World!' a partir do método GET
    res.send('Hello World!');
});

app.get('/produto/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Produto com ID: ${id}`);
});

app.get('/busca', (req, res) => {
    const termo = req.query.termo;
    const pagina = req.query.pagina;
    res.send(`Buscando categoria: ${termo} com preço até: ${pagina}`);
})

app.post('/cadastro', (req, res) => {
    const {usuario, senha } = req.body;
    res.send(`Usuário: ${usuario} | Senha: ${senha}`);
});

app.use('/produtos', produtosRoutes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});