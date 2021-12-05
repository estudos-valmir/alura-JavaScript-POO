import { ContaCorrente } from './ContaCorrente.js';
import { Cliente } from './Cliente.js';

const ccJoao = new ContaCorrente("1234", new Cliente("José da Silva","12345678900"));
const ccAlice = new ContaCorrente("3214", new Cliente("Alice de Oliveira", "932145"));

ccJoao.depositar(500);

console.log(ccJoao._saldo);
console.log(ccJoao.saldo);

console.log(ccJoao);

ccJoao.sacar(600);
console.log(ccJoao);

ccJoao.sacar(300);
console.log(ccJoao);

ccJoao.transferir(150,ccAlice);
console.log(ccJoao);
console.log(ccAlice);


console.log(ContaCorrente._numeroContas);