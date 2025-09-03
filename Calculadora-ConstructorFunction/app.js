function Calculadora() {
    this.display = document.querySelector('.display');

    //Inicia a calculadora
    this.Inicia = () => this.cliqueBotoes();
    //Limpa o display
    this.clearDisplay = () => this.display.value = '';
    //Apaga um caractere
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    //Botão que pega o valor do display
    this.BtnParaDisplay = (valor) => this.display.value += valor;

    //Pega os cliques dos botões
    this.cliqueBotoes = function () {
        document.addEventListener('click', (e) => { // É aqui onde o Js vai pegar onde o clique foi
            const el = e.target;

            if (el.classList.contains('btn-num')) this.BtnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-eq')) this.RealizaConta();
        });
    };

    //Realiza conta da calculadora 
    this.RealizaConta = function () {

        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta && conta !== 0) {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
        }
    };
}

const conta = new Calculadora();
conta.Inicia();