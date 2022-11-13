export class Cliente{

    #valor;
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
        this._senha;
    }


    get valor(){
        return this.#valor;
    }

    set valor(valor){
        this.#valor = valor;
    }

    #valorBonus(){
      return this.#valor * 1.10;  
    }

    get bonus(){
        return this.#valorBonus();
    }
}