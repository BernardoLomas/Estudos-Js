//Limpa os caracteres do cpf, tirando pontos, espaços, traços ou qualquer coisa além de números.
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); //É a partir desse método que olhamos se tem caracteres
        }                                          //indesejados e transformamos eles em ''.
    });
}

ValidaCPF.prototype.valida = function () {
    //A seguir estão validações básicas para saber se o CPF é válido.
    if(typeof this.cpfLimpo === 'undefined') return false; // > Se o tipo for undefined
    if(this.cpfLimpo.length !== 11) return false; // > Se tiver tamanho menor que 11
    if(this.isSequencia()) return false; // Se o método sequencia der true, não é válido, como : 111.111.111-11

    const cpfParcial = this.cpfLimpo.slice(0, -2); // Tira os dois últimos dígitos do CPF para verificação
    const digito1 = this.criaDigito(cpfParcial);   //Método para criar o dígito 1 
    const digito2 = this.criaDigito(cpfParcial + digito1); //Método para criar o dígito 2

    const novoCpf = cpfParcial + digito1 + digito2; //Concatena as 3 variáveis após as verificações
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const CpfArray = Array.from(cpfParcial); //Torna cpfparcial de string para array

    let regressivo = CpfArray.length + 1; //Variável para percorrer o array, como um for regressivo
    
    const total = CpfArray.reduce((ac, val) => { //Usamos o reduce para percorrer o array, AC é o acumulador de contas
        ac += (regressivo * Number(val))         // val é o número vetor que vamos multiplicar pelo regressivo e atribuir ao Ac até acabar o número
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11); // Aqui a fórmula do CPF é feita, 11 - (Acumulador % 11)
    return digito > 9 ? 0 : digito; //If ternário para retornar 0 caso o dígito for maior que 9.
}

ValidaCPF.prototype.isSequencia = function (cpfLimpo){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //Usa o repeat para percorrer o vetor e verificar se os números estão em sequencia 
    if(sequencia === this.cpfLimpo) return true;

    return false;
}

const cpf = new ValidaCPF('164.991.786-40');
console.log(cpf.valida());

if(cpf.valida())
    console.log(`CPF informado: ${cpf.cpfLimpo}, é válido.`);
else
    console.log(`O CPF é inválido.`);
