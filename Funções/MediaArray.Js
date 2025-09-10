const vetor = [1,2,3,4,5];

function Media(vetor) {
    const soma = vetor.reduce((acum, val) => acum + val, 0);
    return soma / vetor.length;
    //O Acumulador inicia com 0 e recebe os valores do vetor a partir do val, percorrendo ele inteiro e retornando a média.
}

console.log(Media(vetor));