/*

********* Pegando datas em anos com javascript
********* Pegando data em meses com javascript
********* Pegando data em dias com javascript
********* Pegando data em horas com javascript

*/

// Pegando a data atual
console.log("********* Pegando datas em anos com javascript *********");

let dataAtual77 = new Date();

//Pegando o ano atusal
let date = dataAtual77.getFullYear();
console.log("dataAtual77.getFullYear()");
console.log(date);
console.log();

// Pegando o mes passado
let mounth = dataAtual77.getMonth() + 1;
console.log("dataAtual77.getMonth()");
console.log(mounth);
console.log();

// Pegando a data do dia atual
let date2 = dataAtual77.getDate();
console.log("dataAtual77.getDate()");
console.log(date2);
console.log();

// Pegando a data do dia atual
let day = dataAtual77.getDay();
console.log("dataAtual77.getDay()");
console.log(day);
console.log();

// Pegando a hora atual
let hour = dataAtual77.getHours();
console.log("dataAtual77.getHours()");
console.log(hour);
console.log();

// Pegando os minutos atuais
let minutes = dataAtual77.getMinutes();
console.log("dataAtual77.getMinutes()");
console.log(minutes);
console.log();

// Pegando horas em UTC
let hoursUTC = dataAtual77.getUTCHours();
console.log("dataAtual77.getUTCHours()");
console.log(hoursUTC);
console.log();

// Pegando minutos em UTC
let minutesUTC = dataAtual77.getUTCMinutes();
console.log("dataAtual77.getUTCMinutes()");
console.log(minutesUTC);
console.log();

// Pegando dia, mês ano e hora atual com toString()
let dateToString = dataAtual77.toString();
console.log("dataAtual77.toString()");
console.log(dateToString);
console.log();

// Pegando dia, mês ano e hora atual com GMT
let dateGMT = dataAtual77.toGMTString();
console.log("dataAtual77.toGMTString()");
console.log(dateGMT);
console.log();

// Pegando dia, mês ano e hora atual com toLocaleDateString()
// Pega a data atual no formato de data local
let dateLocale = dataAtual77.toLocaleDateString();
console.log("dataAtual77.toLocaleDateString()");
console.log(dateLocale);
console.log();

// Pegando a hora atual com toLocaleTimeString()
// Pega a hora atual no formato de hora local
let hourLocale = dataAtual77.toLocaleTimeString();
console.log("dataAtual77.toLocaleTimeString()");
console.log(hourLocale);
console.log();

// Pegando a data e hora atual com toISOString()
let dateHour = dataAtual77.toISOString();
console.log("dataAtual77.toISOString()");
console.log(dateHour);
console.log();

/*

console.log("****************************");
console.log("****************************");
console.log("****************************");

// pegando uma data especifica
let data = new Date(2021, 0, 1);
console.log(data);
console.log();

// pegando a data atual
let dataAtual = new Date();
console.log(dataAtual);
console.log();

// pegando a data atual em milissegundos
let dataAtualMilissegundos = Date.now();
console.log(dataAtualMilissegundos);
console.log();

// pegando a data atual em string
let dataAtualString = Date();
console.log(dataAtualString);
console.log();

// pegando o mesmo dia em milissegundos
let dataMilissegundos = new Date(0);
let dataAtualMilissegundos2 = Date.now(dataMilissegundos);
console.log("dataMilissegundos <><>");
console.log(dataAtualMilissegundos2);
console.log();

// pegando um dia do mês anterior com horas e minutos no período da tarde
let dataAnterior = new Date(2021, 0, 1, 15, 30);
let dateAnterior2 = Date.now(dataAnterior);
console.log("dataAnterior <><><>");
console.log(dataAnterior);
console.log(dateAnterior2);
console.log();

// pegando um dia do mês anterior com horas e minutos no período da manhã
let dataAnterior2 = new Date(2021, 0, 1, 5, 30);
let dateAnterior3 = Date.now(dateAnterior2);
console.log("dataAnterior2 <><><><>");
console.log(dataAnterior2);
console.log(dateAnterior3);
console.log();

// pegando um dia do mês anterior com horas e minutos no período da noite
let dataAnterior3 = new Date(2021, 0, 1, 20, 30);
let dateAnterior4 = Date.now(dataAnterior3);
console.log("dataAnterior3 <@>");
console.log(dataAnterior3);
console.log(dateAnterior4);
console.log();

// pegando um dia do mês anterior com horas e minutos no período da madrugada
let dataAnterior4 = new Date(2021, 0, 1, 0, 30);
let dateAnterior5 = Date.now(dataAnterior4);
console.log("dataAnterior4 <5>");
console.log(dataAnterior4);
console.log(dateAnterior5);
console.log();

*/
