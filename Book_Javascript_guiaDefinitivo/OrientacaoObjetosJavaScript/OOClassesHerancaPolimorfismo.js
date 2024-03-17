// Estudo da OO em JavaScript Classes / Herança / Polimorfismo

// Classe
class CaixaDeFerramenta {
    constructor() {
        this.cor = cor;
        this.durezaAco = durezaAco;
        this.peso = peso;
        this.ferramentas = [];
    }

    adicionar(ferramenta) {
        this.ferramentas.push(ferramenta, cor, durezaAco, peso);
    }
}

// Herança
class CaixaDeFerramentaEspecifica extends CaixaDeFerramenta {
    constructor(cor, durezaAco, peso) {
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

    // Polimorfismo
    adicionar(ferramenta) {
        if (ferramenta.tipo == "chave") {
            this.ferramentas.push(ferramenta);
        } else {
            console.log("Não é uma chave");
        }
    }
}

// Instanciando a classe
let caixaDeFerramenta = new CaixaDeFerramenta("vermelha", 10, 5);
let caixaDeFerramentaEspecifica = new CaixaDeFerramentaEspecifica(
    "vermelha",
    10,
    5,
    "chave",
    "apertar parafuso",
    "fabricante",
    10
);

// Adicionando ferramentas
caixaDeFerramenta.adicionar("chave de fenda");
caixaDeFerramentaEspecifica.adicionar("chave de fendaEspecifica");

// Polimorfismo
caixaDeFerramentaEspecifica.adicionar("martelo");
caixaDeFerramentaEspecifica.adicionar("chave de fenda");
caixaDeFerramentaEspecifica.adicionar("chave de fendaEspecifica");
caixaDeFerramentaEspecifica.adicionar("chave Philips");
caixaDeFerramentaEspecifica.adicionar("chave de boca");
caixaDeFerramentaEspecifica.adicionar("chave de bocaEspecifica");
caixaDeFerramentaEspecifica.adicionar("chave Ale");
caixaDeFerramentaEspecifica.adicionar("chave de torque");
caixaDeFerramentaEspecifica.adicionar("Furadeira");
caixaDeFerramentaEspecifica.adicionar("Alicate");
caixaDeFerramentaEspecifica.adicionar("AlicateUniversal");

// Exibindo ferramentas
console.log(caixaDeFerramenta.ferramentas);
console.log(caixaDeFerramentaEspecifica.ferramentas);
console.log(caixaDeFerramentaEspecifica.ferramentas.length);
console.log(caixaDeFerramentaEspecifica.ferramentas[0]);
console.log(caixaDeFerramentaEspecifica.ferramentas[1]);
console.log(caixaDeFerramentaEspecifica.ferramentas[2]);
console.log(caixaDeFerramentaEspecifica.ferramentas[3]);
console.log(caixaDeFerramentaEspecifica.ferramentas[4]);
console.log(caixaDeFerramentaEspecifica.ferramentas[5]);
console.log(caixaDeFerramentaEspecifica.ferramentas[6]);
console.log(caixaDeFerramentaEspecifica.ferramentas[7]);
console.log(caixaDeFerramentaEspecifica.ferramentas[8]);
console.log(caixaDeFerramentaEspecifica.ferramentas[9]);

caixaDeFerramentaEspecifica.apertarParafuso();
caixaDeFerramentaEspecifica.soltarParafuso();
