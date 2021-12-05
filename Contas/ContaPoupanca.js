import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta{

    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, saldoInicial);
    }

    sacar(valor){
        let taxa = 1.02;
        super._sacar(valor, taxa)
    }
}