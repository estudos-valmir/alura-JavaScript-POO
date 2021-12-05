import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{
    static _numeroContas = 0;

    constructor(agencia,cliente){
        super(agencia, cliente, 0);
        ContaCorrente._numeroContas++;
    }

    sacar(valor){
        let taxa = 1.07;
        super._sacar(valor, taxa);
    }
}