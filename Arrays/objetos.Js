const pessoas = [
  { nome: 'Ronaldo', idade: 18 },
  { nome: 'Rogério', idade: 50 },
  { nome: 'Rodrigo', idade: 10 },
  { nome: 'Renato', idade: 49 },
  { nome: 'Ricardo', idade: 19 },
];

//Somente maiores de 18 com filter
const Mais18 = pessoas.filter(obj => obj.idade > 18);
console.log(Mais18);

//Somente os nomes com método map
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

//Pessoa mais velha com reduce e if ternário
const MaisVelha = pessoas.reduce((acumulador, obj) => {
  return (obj.idade > acumulador.idade) ? valor : acumulador;
});
console.log(MaisVelha);
