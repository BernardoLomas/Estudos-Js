function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaMensagem(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') return reject('Tipo de valor errado, deve ser uma string');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaMensagem('Meu nome é: ', rand())

    .then(resposta => {
        console.log(resposta);
        return esperaMensagem('Bernardo Lomas, e tenho: ', rand());
    })

    .then(resposta => {
        console.log(resposta);
        return esperaMensagem('18 anos', rand());
    })

    .then(resposta => {
        console.log(resposta);
    })

    .catch(erro => {
        console.log('ERRO', erro);
    });