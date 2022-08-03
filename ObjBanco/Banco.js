/**
 * Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta,
 * saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e 
 * número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.
 */


var Banco = {
    conta: "123456",
    agencia: "001",
    saldo: 0,
    tipo_conta: "Corrente",
    consultarSaldo: function() {
        return `Saldo atual: ${this.saldo}`
    },
    depositar: function(valor){
        if(valor<0){
            return "Não é possivel depositar valores negativos"
        }
        this.saldo+=valor;
        return `Valor de: ${valor}, adicionado a sua conta`
    },
    sacar: function(valor){
        if(this.saldo < valor){
            return("Saldo insuficiente!");
        }
        this.saldo -= valor;
        return `Saque de ${valor}`
    },
    consultaNumeroConta: function(){
        return `Número da conta: ${this.conta}`;
    }
}

console.log(Banco.consultarSaldo())
console.log(Banco.depositar(20))
console.log(Banco.sacar(5))
console.log(Banco.consultaNumeroConta())
console.log(Banco.consultarSaldo())