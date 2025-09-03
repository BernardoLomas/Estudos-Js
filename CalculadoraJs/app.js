function CriaCalculadora() {
    return {
        display: document.querySelector('.display'),

        Clear(){
            this.display.value('');
        },

        Inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) { // É aqui onde o Js vai pegar onde o clique foi
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.BtnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.Clear();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
            });
        },

        BtnParaDisplay(valor){
            this.display.value += valor;
        }
        
    }
}

const calculadora = CriaCalculadora();
calculadora.Inicia();