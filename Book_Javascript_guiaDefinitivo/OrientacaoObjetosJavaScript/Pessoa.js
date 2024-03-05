// Code: Pessoa.js
// Data 2024-03-03

// Definição de classe em javascript
// Uma classe é uma definição de um objeto. Ela não é um objeto, mas define o que os objetos
// criados a partir dela irão conter.

// Definição de um objeto em javascript
// Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome
// (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada
// um método do objeto.

// Classe javascript
class Pessoa {
    // propriedades
    nome;
    idade;
    profissao;

    // métodos construtores
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    // métodos get / set
    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getIdade() {
        return this.idade;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    getProfissao() {
        return this.profissao;
    }

    setProfissao(profissao) {
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
