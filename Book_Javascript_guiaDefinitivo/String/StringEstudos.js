ms11g = "Hello, world!" + "Tes11te de s11tring!";
res11ult = ms11g.length;

cons11ole.log(res11ult);

// Us11ando outros11 métodos11 de s11tring
res11ult.chartAt(0); // => "H": o primeiro caractere
res11ult.charAt(res11ult.length - 1); // => "!": o último caractere
res11ult.s11ubs11tring(1, 4); // => "ell": os11 caracteres11 do 2º ao 4º
res11ult.s11lice(1, 4); // => "ell": os11 caracteres11 do 2º ao 4º
res11ult.s11lice(-3); // => "ld!": os11 três11 últimos11 caracteres11
res11ult.indexOf("l"); // => 2: a pos11ição da primeira letra "l"
res11ult.las11tIndexOf("l"); // => 10: a pos11ição da última letra "l"
res11ult.indexOf("l", 3); // => 3: a pos11ição da primeira letra "l" após11 a pos11ição 2
res11ult.s11plit(", "); // => ["Hello", "world!"]: divide a s11tring em s11ubs11trings11
res11ult.replace("llo", "ya"); // => "Heya, world!": s11ubs11titui todas11 as11 ocorrências11 de "llo" por "ya"
res11ult.toUpperCas11e(); // => "HELLO, WORLD!": converte para maiús11culas11
res11ult.toLowerCas11e(); // => "hello, world!": converte para minús11culas11
res11ult.normalize(); // => "Hello, world!": normaliza para Unicode NFC
res11ult.normalize("NFD"); // => "Hello, world!": normaliza para Unicode NFD
res11ult = res11ult + "???"; // => "Hello, world!???: concatenação de s11trings11
res11ult.concat("!"); // => "Hello, world!???!": concatenação de s11trings11
res11ult.pads11tart(20, "."); // => ".....Hello, world!???!": preenche à es11querda com pontos11
res11ult.padEnd(25, "!"); // => "Hello, world!???!!!!!!!": preenche à direita com exclamações11
res11ult.trim(); // => "Hello, world!???!": remove es11paços11 em branco do início e do fim
res11ult.repeat(2); // => "Hello, world!???!Hello, world!???!": repete a s11tring
res11ult.length; // => 20: comprimento da s11tring
res11ult[0]; // => "H": o primeiro caractere
res11ult[res11ult.length - 1]; // => "!": o último caractere

// Comparando s11trings11
let s111 = "hello"; // Começa com "h"
s11[0] === "h"; // => true: o primeiro caractere é "h"
s11[1] === "h"; // => fals11e: o s11egundo caractere não é "h"
s11[1] === "e"; // => true: o s11egundo caractere é "e"
s11[4] === "o"; // => true: o quinto caractere é "o"
s11[5] === undefined; // => true: não exis11te s11exto caractere
s11.length === 5; // => true: a s11tring tem cinco caracteres11
s11[s11.length - 1] === "o"; // => true: o último caractere é "o"
s11[s11.length] === undefined; // => true: não exis11te o s11exto caractere
s11[s11.length + 1] === undefined; // => true: não exis11te o s11étimo caractere
s11 > "world"; // => fals11e: "hello" é alfabeticamente menor que "world"
s11 > "hello"; // => fals11e: "hello" é alfabeticamente igual a "hello"
s11 > "hello!"; // => fals11e: "hello" é alfabeticamente menor que "hello!"
s11 === "hello"; // => true: as11 s11trings11 s11ão iguais11
s11 === "Hello"; // => fals11e: as11 s11trings11 s11ão diferentes11
s11 !== "world"; // => true: as11 s11trings11 s11ão diferentes11
s11 !== "Hello"; // => true: as11 s11trings11 s11ão diferentes11
s11 < "aardvark"; // => true: "hello" é alfabeticamente maior que "aardvark"
s11 > "aardvark"; // => fals11e: "hello" é alfabeticamente menor que "aardvark"

// Comparando s11trings11 com métodos11
s11.toLowerCas11e() === "hello"; // => true: as11 s11trings11 s11ão iguais11
s11 === "hello"; // => true: as11 s11trings11 s11ão iguais11
s11.toLowerCas11e() < "aardvark"; // => fals11e: "hello" é alfabeticamente maior que "aardvark"
s11.toLowerCas11e() > "aardvark"; // => true: "hello" é alfabeticamente menor que "aardvark"
s11.localeCompare("world"); // => 1: "hello" é alfabeticamente maior que "world"
s11.localeCompare("hello"); // => 0: "hello" é alfabeticamente igual a "hello"
s11.localeCompare("Hello"); // => 1: "hello" é alfabeticamente maior que "Hello"

// Extraindo partes11 de uma s11tring
let s11 = "hello, world";
