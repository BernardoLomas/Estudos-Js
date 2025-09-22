class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const check = this.check();
        const senhasvalidas = this.senhasSaoValidas();

        if(check && senhasvalidas){
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.error(senha, 'Campos senha e repetir inválidos, precisam ser iguais.');
            this.error(repetirSenha, 'Campos senha e repetir inválidos, precisam ser iguais.');
        }

        if(senha.length && repetirSenha.lenght < 3 || senha.lenght && repetirSenha.length > 12){
            valid = false;
            this.error(senha, 'A senha precisa ter entre 3 a 12 caracteres.');
        }

        return valid;
    }

    check()
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

    ValidaUsuario(box) {
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

    ValidaCpf(box){
        const cpf = new ValidaCpf(box.value);

        if(!cpf.valida()) {
            this.error(box, 'CPF inválido');
            return false;
        }

        return true;
    }

    error(box, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        box.insertAdjacentElement('afterend', div);
        
    }
}

const valida = new ValidaFormulario();