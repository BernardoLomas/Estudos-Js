//Definição da função felino
function Felino(nome){
    this.nome = nome;
}

//Definição do método caçar de felinos
Felino.prototype.caçar = function(){
    console.log(this.nome + " sabe caçar.");
};

//Definição da função leão
function Leao(nome){
    //É aqui onde ele herda as propriedades do felino
    Felino.call(this, nome);
};

//Aqui a herança está 100% completa.
Leao.prototype = Object.create(Felino.prototype);
Leao.prototype.constructor = Leao;

//Método rugir do leão
Leao.prototype.rugir = function(){
    console.log(this.nome + " sabe rugir.");
};

const Simba = new Leao('Simba');
Simba.rugir();
Simba.caçar();