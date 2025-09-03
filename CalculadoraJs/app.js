function CriaCalculadora() {
    return {
        display: document.querySelector('.display'),

        Inicia() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            }   catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => { // É aqui onde o Js vai pegar onde o clique foi
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.BtnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        BtnParaDisplay(valor) {
            this.display.value += valor;
        }

    }
}

const calculadora = CriaCalculadora();
calculadora.Inicia();