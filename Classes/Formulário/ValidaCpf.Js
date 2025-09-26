class ValidaCpf {
    constructor(CpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: CpfEnviado.replace(/\D+/g, '')
        });
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length < 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const CpfArray = Array.from(cpfParcial);

        let regressivo = CpfArray.length + 1;

        const total = CpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? 0 : digito;
    }

    isSequencia(cpfLimpo) {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        if (sequencia === this.cpfLimpo) return true;

        return false;
    }
}

/*const cpf1 = new ValidaCpf('164.991.786-40');
console.log(cpf1.valida());

if(cpf1.valida())
    console.log(`CPF informado: ${cpf1.cpfLimpo}, é válido.`);
else
    console.log(`O CPF é inválido.`);*/