function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
    console.log(`O preço com ${percentual}% de desconto é igual a ${this.preco}.`);
};

const celular = new Produto("Iphone", 100);
celular.desconto(10);