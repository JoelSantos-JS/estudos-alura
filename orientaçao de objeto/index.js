const cliente1Nome = 'Joel';
const clienteCpf = '01191269582'
const cliente1Agencia = 1001
const cliente1Saldo = 0



class Cliente {
    nome;
      cpf;
   
}

class ContaCorrente  {
   
  agencia;
     saldo;
     sacar(valor) {
      if(this.saldo >= valor) {
        this.saldo -= valor
      }
     }

     depositar(valor) {
      if(valor > 0){
      this.saldo += valor

      }
     }

};



const cliente1 = new Cliente()
const conta = new ContaCorrente()

cliente1.nome = 'Joel';
cliente1.cpf = '4444';
cliente1.agencia  = 'itau';
cliente1.saldo= 0;


conta.agencia = 65564,
conta.saldo = 45,
conta.depositar(200)
conta.depositar(400)
conta.sacar(500)

console.log(conta.saldo)