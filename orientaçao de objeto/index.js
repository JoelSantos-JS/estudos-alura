import { Cliente } from './Cliente.js'

class ContaCorrente  {
   
  agencia;
     saldo;
     sacar(valor) {
      if(this.saldo >= valor) {
        this.saldo -= valor

        return valor
      }
     }

     depositar(valor) {
      if(valor > 0){
      this.saldo += valor

      }
     }

     transferir(valor, conta) {
      const valorS = this.sacar(valor)
      conta.depositar(valorS)
     }

};

const conta = new ContaCorrente()
const Joel = new ContaCorrente()
const cliente1 = new Cliente()



cliente1.nome = 'Mna';
cliente1.cpf = '4444';
conta.agencia  = 'itau';
conta.saldo= 5;


Joel.agencia = '555'
Joel.saldo= 10000
Joel.transferir(200, conta)


conta.transferir(150, Joel)
console.log(cliente1)

console.log(Joel)

console.log(conta)