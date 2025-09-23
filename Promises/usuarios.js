function rand(min = 1, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function buscaUsuario(id, nome, tempo) {
  return new Promise((resolve, reject) => {
    if (id !== '1' || nome !== 'Bernardo') return reject('Usuário não encontrado');

    setTimeout(() => {
      resolve({ id, nome });
    }, tempo);
  });
}

// Chamando corretamente:
buscaUsuario('1', 'Bernardo', rand())
  .then(resposta => {
    console.log('Usuário encontrado:', resposta);
    return buscaUsuario(resposta.id, resposta.nome, rand());
  })
  .then(resposta => {
    console.log('Busca novamente:', resposta);
  })
  .catch(erro => {
    console.log('ERRO:', erro);
  });
