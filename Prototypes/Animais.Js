function Animal(nome)
{
    this.nome = nome;
}

Animal.prototype.falar = function(){
    console.log(this.nome + " está falando...");
};

const Simba = new Animal('Simba');
Simba.falar();
const Scar = new Animal('Scar');
Scar.falar();