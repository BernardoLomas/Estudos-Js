function Calculadora(num1, num2, operador){
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            return "Operador inválido!";
    }

    return resultado;
}

console.log(Calculadora(2,2, '-'));