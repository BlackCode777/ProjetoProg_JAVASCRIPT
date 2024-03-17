// importando a classe Pessoa
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    // métodos para execução de rotinas
    apresentar() {
        console.log(
            `Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`
        );
    }
    // métodos estáticos
    static criarPessoa(nome, idade, profissao) {
        return new Pessoa(nome, idade, profissao);
    }
    // métodos de classe
    static apresentarPessoa(pessoa) {
        console.log(
            `Olá! Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`
        );
    }
}

let pessoa = new Pessoa("João", 25, "Programador");
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
