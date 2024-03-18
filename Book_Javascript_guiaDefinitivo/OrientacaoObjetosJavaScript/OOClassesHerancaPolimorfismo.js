// Estudo da OO em JavaScript Classes / Herança / Polimorfismo

// Classe
class CaixaDeFerramenta {
    // Encapsulamento
    cor;
    durezaAco;
    peso;
    constructor(cor, durezaAco, peso) {
        this.cor = cor;
        this.durezaAco = durezaAco;
        this.peso = peso;
        this.ferramentas = [];
    }
    adicionar(ferramenta) {
        this.ferramentas.push(ferramenta);
    }
}

// Herança
class CaixaDeFerramentaEspecifica extends CaixaDeFerramenta {
    constructor(
        cor,
        durezaAco,
        peso,
        tipo,
        descricaoDoUso,
        fabricante,
        forcaDeAperto
    ) {
        // Herda as propriedades da classe CaixaDeFerramente
        super(cor, durezaAco, peso);
        // Adiciona propriedades especificas da classe CaixaDeFerramente
        this.tipo = tipo;
        this.descricaoDoUso = descricaoDoUso;
        this.fabricante = fabricante;
        this.forcaDeAperto = forcaDeAperto;
    }
    // metodos especificos da classe CaixaDeFerramentaEspecifica
    apertarParafuso() {
        console.log("Apertando parafuso");
    }
    soltarParafuso() {
        console.log("Soltando parafuso");
    }
    // Polimorfismo - Método para adicionar ferramenta é sobrescrito para aceitar somente ferramentas do tipo chave
    adicionar(ferramenta) {
        this.ferramentas.push(ferramenta);
    }
    // Método para remover ferramenta
    remover(ferramenta) {
        this.ferramentas = this.ferramentas.filter((f) => f !== ferramenta);
    }
}

// Instanciando a classe
let caixaFerr = new CaixaDeFerramenta("vermelha", 10, 5);
let caixaFerrEspec = new CaixaDeFerramentaEspecifica(
    "vermelha",
    10,
    5,
    "chave",
    "Apertar parafuso",
    "Tramontina",
    10
);

// Adicionando ferramentas
caixaFerr.adicionar("chave de fenda");
caixaFerr.adicionar("chave Philips");
caixaFerr.adicionar("chave de boca");
console.log(caixaFerr.ferramentas);

caixaFerrEspec.adicionar("chave de fendaEspecifica");
caixaFerrEspec.adicionar("chave PhilipsEspecifica");
caixaFerrEspec.adicionar("chave de bocaEspecifica");
console.log(caixaFerrEspec.ferramentas);

// Exibindo ferramentas

// Comando para rodar o código na linha de comando
// Entra na pasta onde está o arquivo OOClassesHerancaPolimorfismo.js e executa o comando abaixo
// $ node OOClassesHerancaPolimorfismo.js

/*

// Instanciando a classe
let caixaDeFerramenta0 = new CaixaDeFerramenta("vermelha", 10, 5);
let caixaDeFerramenta1 = new CaixaDeFerramenta("azul", 15, 6);
let caixaDeFerramenta2 = new CaixaDeFerramenta("verde", 20, 7);

// Adicionando ferramentas
caixaDeFerramenta0.adicionar("chave de fenda");
caixaDeFerramenta1.adicionar("chave Philips");
caixaDeFerramenta2.adicionar("chave de boca");

// Exibindo ferramentas
console.log(caixaDeFerramenta0.ferramentas);
console.log(caixaDeFerramenta1.ferramentas);
console.log(caixaDeFerramenta2.ferramentas);


console.log();
console.log("Acessando as ferramentas da caixaDeFerramentaEspecifica");
console.log(caixaDeFerramentaEspecifica.ferramentas);
console.log(caixaDeFerramentaEspecifica);

// Exibindo ferramentas
//console.log(caixaDeFerramenta.ferramentas);
console.log("");
console.log(caixaDeFerramentaEspecifica.ferramentas);
console.log(caixaDeFerramentaEspecifica.ferramentas.length);

console.log();
console.log("Acessando o objeto caixaDeFerramentaEspecifica");
console.log(caixaDeFerramentaEspecifica);

console.log();
console.log("Acessando as propriedades da classe CaixaDeFerramentaEspecifica");
console.log(caixaDeFerramentaEspecifica.forcaDeAperto);
console.log(caixaDeFerramentaEspecifica.tipo);
console.log(caixaDeFerramentaEspecifica.descricaoDoUso);
console.log(caixaDeFerramentaEspecifica.fabricante);
console.log(caixaDeFerramentaEspecifica.cor);
console.log(caixaDeFerramentaEspecifica.durezaAco);
console.log(caixaDeFerramentaEspecifica.peso);
console.log(caixaDeFerramentaEspecifica.ferramentas);

caixaDeFerramentaEspecifica.apertarParafuso();
caixaDeFerramentaEspecifica.soltarParafuso();


// console.log(caixaDeFerramentaEspecifica.ferramentas[0]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[1]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[2]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[3]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[4]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[5]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[6]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[7]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[8]);
// console.log(caixaDeFerramentaEspecifica.ferramentas[9]);

// Adicionando ferramentas
//caixaDeFerramenta.adicionar("chave de fenda");
// caixaDeFerramentaEspecifica.adicionar("chave de fendaEspecifica");

// Polimorfismo
// caixaDeFerramentaEspecifica.adicionar("martelo");
// caixaDeFerramentaEspecifica.adicionar("chave de fenda");
// caixaDeFerramentaEspecifica.adicionar("chave de fendaEspecifica");
// caixaDeFerramentaEspecifica.adicionar("chave Philips");
// caixaDeFerramentaEspecifica.adicionar("chave de boca");
// caixaDeFerramentaEspecifica.adicionar("chave de bocaEspecifica");
// caixaDeFerramentaEspecifica.adicionar("chave Ale");
// caixaDeFerramentaEspecifica.adicionar("chave de torque");
// caixaDeFerramentaEspecifica.adicionar("Furadeira");
// caixaDeFerramentaEspecifica.adicionar("Alicate");
// caixaDeFerramentaEspecifica.adicionar("AlicateUniversal");

*/
