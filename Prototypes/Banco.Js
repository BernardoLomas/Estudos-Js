function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.Sacar = function (valor) {
    if(this.saldo >= valor){
        this.saldo -= valor;
        console.log(`Sacado: R$${valor} | Saldo atual: R$${this.saldo}`);
        return this.saldo;
    }
    console.log("Saldo insuficiente!");
    return this.saldo;
}

Conta.prototype.VerSaldo = function (){
    console.log(`O saldo da conta é R$${this.saldo}`);
    return this.saldo;
}

Conta.prototype.Deposito = function (valor) {
    this.saldo += valor;
    console.log(`Depositado: R$${valor} | Saldo atual: R$${this.saldo}`);
    return this.saldo;
}
   
function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

const conta = new Conta(11, 1, 10);
conta.VerSaldo();       
conta.Sacar(10);       
conta.Deposito(30);  

