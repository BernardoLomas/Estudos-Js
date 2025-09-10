const palavra = 'Arara';

function Palindromos(palavra) {
    const invertida = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === invertida.toLowerCase();
}

console.log(Palindromos(palavra));