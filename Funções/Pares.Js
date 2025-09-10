const vetor = [1,2,3,4,5];

function Pares(vetor) {
    const p = vetor.filter(obj => obj % 2 === 0);
    return p;
}

console.log(Pares(vetor));