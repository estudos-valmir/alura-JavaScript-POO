import { Cliente } from './Cliente.js';
export class Conta{

    constructor(agencia,cliente, saldo){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
            this._agencia = agencia;
            this._saldo = saldo;
        }
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

    _sacar(valor, taxa = 1){
        let valorSacado = valor * taxa;
        if (this._saldo <= valorSacado) return; 
        this._saldo -= valorSacado;
    }

    depositar(valor){

        if (valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, conta){
        if (this._saldo <= valor) return; 
        this._saldo -= valor;
        conta.depositar(valor);
    }
}