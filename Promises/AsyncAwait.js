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

async function executa() {
    try{
        const msg1 = await esperaMensagem('Meu nome é Bernardo Lomas', rand());
        console.log(msg1);
        
        const msg2 = await esperaMensagem('Tenho 18 anos', rand());
        console.log(msg2);

        const msg3 = await esperaMensagem('Moro em Belo Horizonte', rand());
        console.log(msg3);
    } catch(erro) {
        console.log('Erro, mensagem deve ser de tipo string', erro);
    }
}

executa();