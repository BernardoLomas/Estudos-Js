//Declaração do Array
const nomes = ['Bernardo', 'Lucas', 'Matheus', 'Davi', 'Otávio'];

//Método Splice para remover o último elemento
const removeUltimo = nomes.splice(4,1);

//Método unshift para adicionar um elemento no ínicio
nomes.unshift('Alex');

//Método Slice para mostrar do índice 0 ao 2
const MostraTres = nomes.slice(0,3);

//Método para transformar arrays em strings.
const Separa = nomes.join(',');

console.log(removeUltimo);
console.log(MostraTres);
console.log(Separa);