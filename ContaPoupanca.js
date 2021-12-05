import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta{

    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, saldoInicial);
    }

    sacar(valor){
        super._sacar(valor)
    }
}