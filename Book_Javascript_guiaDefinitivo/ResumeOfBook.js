



// Funções com código de estrutura de controle
function abs() {
    var x = -10;
    if (x < 0) {
        x = -x;
    } else {
        return -x;
    }

    return x;
} 
function factorial(n) { 
    vat product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}

factorial(4); // => 24: 1*4*3*2


// Javascript é uma linguagem de programação de alto nível, interpretada, orientada a objetos e dinâmica
Points.dist = function () {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};

// chamando a função
var p = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
];
console.log(Points.dist(p));

// Tipos de dados em javascript
// Números
// Strings
// Booleanos
// Objetos
// Funções
// Arrays
// Data
// RegExp
// Null
// Undefined

var a = []; // cria um array vazio
a.push(1, 2, 3); // o array agora é [1, 2, 3]
a.reverse(); // o array agora é [3, 2, 1]

// Funções em javascript
// Funções são objetos de primeira classe em javascript
// Funções podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções
// Funções podem ser aninhadas, ou seja, uma função pode ser definida dentro de outra
// Funções podem ser invocadas como métodos
// Funções podem ser invocadas como construtores
// Funções podem ser invocadas como funções
function square(x) {
    return x * x;
}
square(2); // => 4

var square = function (x) {
    return x * x;
};
var s = square(2); // s é 4
console.log(s);

// Funções podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções
function add(x, y) {
    return x + y;
}
var plus = add;
plus(3, 4); // => 7

function div(a, b) {
    return a / b;
}
var divide = div;
var result = divide(10, 2);

if (result == 5) {
    console.log("Resultado correto");
    console.log(result);
} else console.log("Resultado incorreto");
