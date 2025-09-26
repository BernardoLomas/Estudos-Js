function rand(min = 1, max=3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function downloads(arquivo, tempo){
    return new Promise((resolve, reject) => {
        if(typeof arquivo !== 'string') return reject('ERRO, o promise deve ser de tipo string');

        setTimeout(() => {
            resolve(arquivo);
        }, tempo);
    });
}

const Promessa1 = [
    downloads("Arquivo 1", rand()),
    downloads("Arquivo 2", rand()),
    downloads("Arquivo 3", rand()),
];

Promise.all(Promessa1)
    .then(function(valor) {
        console.log("Todos os arquivos foram baixados");
    })
    .catch(function(erro) {
        console.log(erro);
    })

Promise.race(Promessa1)
    .then(function(valor) {
        console.log("O primeiro arquivo baixado foi: " + valor);
    })
    .catch(function(erro) {
        console.log(erro);
    })