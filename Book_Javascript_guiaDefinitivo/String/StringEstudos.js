msg = "Hello, world!" + "Teste de string!";
result = msg.length;

console.log(result);

// Usando outros métodos de string
result.chartAt(0); // => "H": o primeiro caractere
result.charAt(result.length - 1); // => "!": o último caractere
result.substring(1, 4); // => "ell": os caracteres do 2º ao 4º
result.slice(1, 4); // => "ell": os caracteres do 2º ao 4º
result.slice(-3); // => "ld!": os três últimos caracteres
result.indexOf("l"); // => 2: a posição da primeira letra "l"
result.lastIndexOf("l"); // => 10: a posição da última letra "l"
result.indexOf("l", 3); // => 3: a posição da primeira letra "l" após a posição 2
result.split(", "); // => ["Hello", "world!"]: divide a string em substrings
result.replace("llo", "ya"); // => "Heya, world!": substitui todas as ocorrências de "llo" por "ya"
result.toUpperCase(); // => "HELLO, WORLD!": converte para maiúsculas
result.toLowerCase(); // => "hello, world!": converte para minúsculas
result.normalize(); // => "Hello, world!": normaliza para Unicode NFC
result.normalize("NFD"); // => "Hello, world!": normaliza para Unicode NFD
result = result + "???"; // => "Hello, world!???: concatenação de strings
result.concat("!"); // => "Hello, world!???!": concatenação de strings
result.padStart(20, "."); // => ".....Hello, world!???!": preenche à esquerda com pontos
result.padEnd(25, "!"); // => "Hello, world!???!!!!!!!": preenche à direita com exclamações
result.trim(); // => "Hello, world!???!": remove espaços em branco do início e do fim
result.repeat(2); // => "Hello, world!???!Hello, world!???!": repete a string
result.length; // => 20: comprimento da string
result[0]; // => "H": o primeiro caractere
result[result.length - 1]; // => "!": o último caractere

// Comparando strings
let s = "hello"; // Começa com "h"
s[0] === "h"; // => true: o primeiro caractere é "h"
s[1] === "h"; // => false: o segundo caractere não é "h"
s[1] === "e"; // => true: o segundo caractere é "e"
s[4] === "o"; // => true: o quinto caractere é "o"
s[5] === undefined; // => true: não existe sexto caractere
s.length === 5; // => true: a string tem cinco caracteres
s[s.length - 1] === "o"; // => true: o último caractere é "o"
s[s.length] === undefined; // => true: não existe o sexto caractere
s[s.length + 1] === undefined; // => true: não existe o sétimo caractere
s > "world"; // => false: "hello" é alfabeticamente menor que "world"
s > "hello"; // => false: "hello" é alfabeticamente igual a "hello"
s > "hello!"; // => false: "hello" é alfabeticamente menor que "hello!"
s === "hello"; // => true: as strings são iguais
s === "Hello"; // => false: as strings são diferentes
s !== "world"; // => true: as strings são diferentes
s !== "Hello"; // => true: as strings são diferentes
s < "aardvark"; // => true: "hello" é alfabeticamente maior que "aardvark"
s > "aardvark"; // => false: "hello" é alfabeticamente menor que "aardvark"

// Comparando strings com métodos
s.toLowerCase() === "hello"; // => true: as strings são iguais
s === "hello"; // => true: as strings são iguais
s.toLowerCase() < "aardvark"; // => false: "hello" é alfabeticamente maior que "aardvark"
s.toLowerCase() > "aardvark"; // => true: "hello" é alfabeticamente menor que "aardvark"
s.localeCompare("world"); // => 1: "hello" é alfabeticamente maior que "world"
s.localeCompare("hello"); // => 0: "hello" é alfabeticamente igual a "hello"
s.localeCompare("Hello"); // => 1: "hello" é alfabeticamente maior que "Hello"

// Extraindo partes de uma string
let s = "hello, world";
