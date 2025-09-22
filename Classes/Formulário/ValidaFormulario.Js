class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario'); // Cria a classe de validação do formulário
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { //Esse método pega tudo que foi enviado e digitado no formulário e cria um evento para isso
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) { //A partir desse evento, são criados métodos para validação do formulário
        e.preventDefault();
        const check = this.check();
        const senhasvalidas = this.senhasSaoValidas();

        if(check && senhasvalidas){
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){ //Aqui verifica se as senhas são válidas e dentro dos padrões
        let valid = true; //Essa variável valid que define tudo, se ela retorna true quer dizer que está tudo ok, se retorna false, está errado
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.error(senha, 'Campos senha e repetir inválidos, precisam ser iguais.');
            this.error(repetirSenha, 'Campos senha e repetir inválidos, precisam ser iguais.');
        }

        if(senha.value.length && repetirSenha.value.length < 3 || senha.value.lenght && repetirSenha.value.length > 12){
            valid = false;
            this.error(senha, 'A senha precisa ter entre 3 a 12 caracteres.');
        }

        return valid;
    }

    check() // Esse check funciona da mesma maneira que as senhas, verifica e retorna true or false, pegando campo por campo
    {
        let valid = true;
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let box of this.formulario.querySelectorAll('.ok')) {
            const label = box.previousElementSibling.innerHTML;

            if(!box.value) {
                this.error(box, `Campo "${label}" não pode estar em branco`);
            }

            if(box.classList.contains('cpf')){
                if(!this.ValidaCpf(box)) valid = false;
            }
            
            if(box.classList.contains('usuario')){
                if(!this.ValidaUsuario(box)) valid = false;
            }
        }

        return valid;
    }

    ValidaUsuario(box) { //Método de validação do usuário
        const usuario = box.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.error(box, 'Usuário deve ter entre 3 a 12 dígitos');
            return false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.error(box, 'Nome de usuário precisa conter apenas letras ou números');
            return false;
        }

        return valid;
    } 

    ValidaCpf(box){ //Método de validação do CPF a partir de um código em outra pasta, que foi carregado antes desse validador do form
        const cpf = new ValidaCpf(box.value);

        if(!cpf.valida()) {
            this.error(box, 'CPF inválido');
            return false;
        }

        return true;
    }

    error(box, msg){ //Aqui serve para escrever o erro, pega o que foi escrito na box e retorna como msg em forma de div
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        box.insertAdjacentElement('afterend', div);
        
    }
}

const valida = new ValidaFormulario();