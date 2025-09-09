//Declaração do Array
const frutas = ['maçã', 'banana', 'uva', 'laranja', 'manga'];

//Remoção de elemento com método splice
const RemoveUva = frutas.splice(2,1);

//Guarda um elemento em um novo vetor
const GuardaUva = (RemoveUva);

//Adiciona 2 elementos no vetor
const AdicionaAbacaxi = frutas.splice(2, 0, 'abacaxi', 'melancia');


console.log(frutas);
console.log(GuardaUva);