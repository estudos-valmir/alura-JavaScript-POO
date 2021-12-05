import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Cliente } from './Clientes/Cliente.js';

const ccJoao = new ContaCorrente("1234", new Cliente("João da Silva","12345678900"));
const ccAlice = new ContaCorrente("3214", new Cliente("Alice de Oliveira", "14725836999"));
const cpAlfredo = new ContaPoupanca("111", new Cliente("Alfredo Dias", "12345678999"), 550);
//const ccTeste = new Conta("1611", new Cliente("Conta Teste", "12345888999"), 550);

ccJoao.depositar(500);

ccJoao.sacar(600);

ccJoao.sacar(300);

ccJoao.transferir(150,ccAlice);

cpAlfredo.sacar(39);

console.log(ccJoao);
console.log(ccAlice);
console.log(cpAlfredo);

console.log(ContaCorrente._numeroContas);
