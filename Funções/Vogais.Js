const vogais = ['a', 'e', 'i', 'o', 'u'];

function ContaVogais(string) {
    //Transforma a string em vetor
    const letras = string.toLowerCase().split('');

    //Filtra as vogais do vetor e verifica dentro do vetor vogais se existe aquela letra la com includes
    const somenteVogais = letras.filter(letra => vogais.includes(letra));

    //retorna o tamanho da variável contadora de vogais
    return somenteVogais.length;
}

console.log(ContaVogais('arara'));