// Data: 2024-03-03

// Objeto Site
let Site = {
    nome: String,
    url: String,
    categoria: String,
};

function FuncConstSite() {
    this.nome = "Google";
    this.url = "www.google.com";
    this.categoria = "Buscador";
}

let site = new FuncConstSite();
site.nome;
site.url;
site.categoria;
console.log(site.nome);
console.log(site.url);
console.log(site.categoria);

// Objeto pessoa
let Pessoa = {
    nome: String,
    idade: Number,
    profissao: String,
};

function FuncConstPessoa() {
    this.nome = "Lucas";
    this.idade = 20;
    this.profissao = "Pedreiro";
}

// Chamando a função construtora
let pessoa = new FuncConstPessoa();
pessoa.nome;
pessoa.idade;
pessoa.profissao;
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

// Objeto caneta
let Caneta = {
    cor: String,
    marca: String,
    modelo: String,
};

function FuncConstCaneta() {
    this.cor = "Azul";
    this.marca = "Bic";
    this.modelo = "Cristal";
}

// Chamando a função construtora
let caneta = new FuncConstCaneta();
console.log(caneta.cor);
console.log(caneta.marca);
console.log(caneta.modelo);

console.log(Caneta.cor);
console.log(Caneta.marca);
console.log(Caneta.modelo);

// Objeto fone
let fone = {
    marca: "Samsung",
    modelo: "Galaxy A10",
    cor: "Preto",
};

function FuncConstFone() {
    this.marca = "Samsung";
    this.modelo = "Galaxy A10";
    this.cor = "Branco";
}

console.log(fone.marca);
console.log(fone.modelo);
console.log(fone.cor);

// criar um objeto
let book = {
    title: "Javascript",
    author: "Lucas",
    edition: 7,
};
function FunctionConstrutoraBook() {
    this.title = "Javascript";
    this.author = "Lucas";
    this.edition = 7;
}
// Função construtora
let person = {
    name: "Lucas",
    age: 20,
    profession: "Desenvolvedor",
};
function FuncaoConstrutora() {
    this.nome = "Lucas";
    this.age = 20;
    this.profissao = "Desenvolvedor";
}
/* Caracteristicas
    - Nome da função começa com letra maiúscula
    - Usa a palavra-chave this para inicializar propriedades do objeto que está sendo criado
    - Não usa return
    - Invocada com o operador new

    Qual a finalidade de uma função construtora? Em que situações ela é utilizada?

    - A finalidade de uma função construtora é criar um novo objeto. Ela é utilizada quando é 
    necessário criar um novo objeto com as mesmas propriedades e métodos de um objeto já existente.   
*/

// Funções com código de estrutura de controle
function abs() {
    let x = -10;
    if (x < 0) {
        x = -x;
    } else {
        return -x;
    }

    return x;
}
function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}

factorial(4); // => 24: 1*4*3*2

// Javascript é uma linguagem de programação de alto nível, interpretada, orientada a objetos e dinâmica
Points.dist = function () {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};

// chamando a função
let p = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
];
console.log(Points.dist(p));

// Tipos de dados em javascript
// Números// Strings// Booleanos// Objetos// Funções// Arrays// Data// RegExp// Null// Undefined

let a = []; // cria um array vazio
a.push(1, 2, 3); // o array agora é [1, 2, 3]
a.reverse(); // o array agora é [3, 2, 1]

// Funções em javascript
// Funções são objetos de primeira classe em javascript
// Funções podem ser atribuídas a letiáveis, passadas como argumentos e retornadas de outras funções
// Funções podem ser aninhadas, ou seja, uma função pode ser definida dentro de outra
// Funções podem ser invocadas como métodos
// Funções podem ser invocadas como construtores
// Funções podem ser invocadas como funções
function square(x) {
    return x * x;
}
square(2); // => 4

let square = function (x) {
    return x * x;
};
let s = square(2); // s é 4
console.log(s);

// Funções podem ser atribuídas a letiáveis, passadas como argumentos e retornadas de outras funções
function add(x, y) {
    return x + y;
}
let plus = add;
plus(3, 4); // => 7

function div(a, b) {
    return a / b;
}
let divide = div;
let result = divide(10, 2);

if (result == 5) {
    console.log("Resultado correto");
    console.log(result);
} else console.log("Resultado incorreto");
