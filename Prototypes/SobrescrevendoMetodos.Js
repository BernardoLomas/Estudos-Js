function Ave(nome){
    this.nome = nome;
}

Ave.prototype.voar = function(){
    console.log(this.nome + " sabe voar.");
}

function Pinguim(nome){
    Ave.call(this, nome); // herda propriedades
}

// Herdando de Ave
Pinguim.prototype = Object.create(Ave.prototype);
Pinguim.prototype.constructor = Pinguim;

// Sobrescrevendo método
Pinguim.prototype.voar = function(){
    console.log(this.nome + " não voa, mas nada!");
}

const pinguim1 = new Pinguim("Pinguim");
pinguim1.voar(); 
