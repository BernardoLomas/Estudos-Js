const express = require('express') //Importação do módulo do express
const app = express() //Criação da variável app para uso do express

// Uma API deve ser capaz de fazer o CRUD = C: Create (criar), R: Read(ler), U: Update (atualizar), D: Delete(apagar)
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get('/', (req, res) => { //Manda a requisição da aba '/' e retorna a resposta 'Hello World!' a partir do método GET
    res.send('Hello World!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por acessar meu site!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});