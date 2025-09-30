const express = require('express') //Importação do módulo do express
const app = express() //Criação da variável app para uso do express
app.use(express.json()); //Possibilita interpretação de Json pelo express
const path = require('path');

app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname, 'src', 'public'))); // Leitura de arquivos estáticos pelo Express

const produtosRoutes = require('./src/Routes/produtosRoutes.Js'); //Exportação do Routes
app.use('/produtos', produtosRoutes); //Uso dos métodos de produtos pelo express

app.set('views', path.join(__dirname, 'views')); // Leitura dos views, arquivos HTML por assim dizer
app.set('view engine', 'ejs'); // Interpretação do EJS views pelo Express

app.get('/home', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});