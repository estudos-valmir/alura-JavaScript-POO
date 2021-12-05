import { Cliente } from './Cliente.js';

export class ContaCorrente{
    static _numeroContas = 0;
    _cliente;
    _agencia;
    _saldo = 0;

    constructor(agencia,cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
            this.agencia = agencia;
        }
        ContaCorrente._numeroContas += 1;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    set agencia (novaAgencia){
        this._agencia = novaAgencia;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if (this._saldo <= valor) return; 
        this._saldo -= valor;
    }

    depositar(valor){

        if (valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, conta){
        this.sacar(valor);
        conta.depositar(valor);
    }

}