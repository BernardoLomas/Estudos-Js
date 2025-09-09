//Declaração de array
const numeros = [5, 10, 15, 20, 25, 30];

//Elementos maiores que 15 usando filter
const Primeira = numeros.filter(obj => obj > 15);
console.log(Primeira);

//Dobro dos elementos usando map
const Dobros = Primeira.map(obj => obj * 2);
console.log(Dobros);


