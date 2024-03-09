/*
Um valor booleano representa verdadeiro ou falso, ligado ou desligado, sim ou não. Só existem dois 
valores possíveis desse tipo. As palavras reservadas true e false são avaliadas nesses dois valores.

Valores booleanos tem um método toString() que converte o valor para uma string. O valor true é
convertido para a string "true" e o valor false é convertido para a string "false". O método
String() faz a mesma conversão.

*/

// Path: Book_Javascript_guiaDefinitivo/Booleanos/Booleanos.js
// Convertendo um valor booleano para uma string
let b = true; // Um valor booleano
b.toString(); // => "true"
console.log(b.toString());

let b1 = false; // Outro valor booleano
b1.toString(); // => "false"
console.log(b1.toString());

// convetendo um valor string para um valor booleano
let s = "Hello, world"; // Uma string não vazia
let b2 = Boolean(s); // => true: todas as strings não vazias são verdadeiras!
console.log(b2);

// Testando se um valor null ou undefined é verdadeiro ou falso
let n = null;
let b3 = Boolean(n); // => false: o valor null é falso
console.log(b3);

let u = undefined;
let b4 = Boolean(u); // => false: o valor undefined é falso
console.log(b4);

if ((n == null && u == null) || !(s == 0)) {
    console.log("n e u são null, s não é 0");
}

/**************

Testando valor null ou undefined

null: é um valor primitivo que representa a ausência de um valor. Em JavaScript, null é um valor
primitivo e não um objeto. Isso é importante porque typeof null retorna "object".

undefined: é um valor primitivo que representa a ausência de um valor. Em JavaScript, undefined é Um
valor primitivo e não um objeto. Isso é importante porque typeof undefined retorna "undefined".
É o valor de variáveis que não foram inicializadas e o 
valor obtido quando se consulta o valor de uma propriedade de objeto ou elemento de array que 
não existe


***************/

let n1 = null;
let u1 = undefined;

// aplicando typeof para testar se o valor é null ou undefined
console.log(typeof n1); // object
if (typeof n1 === "object") {
    console.log("n1 é null");
}

// try / catch em javascript
try {
} catch (error) {}
