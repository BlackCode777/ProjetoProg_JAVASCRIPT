console.log("Objetos como arrays associativos");
console.log("================================");

// function getValue(portifolio) {
//     var total = 0.0;

//     for (stock in portifolio) {
//         var share = portifolio[stock];
//         var price = getquote(stock);
//         total += share * price;
//     }
//     return total;
// }

// getValue({ IBM: 50, MSFT: 75, GOOG: 100 });

console.log("================================");
var addr = "";

customer = {
    name: "Tom Smith",
    street: "123 Main Street",
    city: "Anython",
    state: "TX",
};

for (i = 0; i < 4; i++) {
    addr += customer["street" + i] + "\n";

    console.log(addr);
}

console.log("================================");
// Criando um objeto
Object.prototype; // Objeto estático
Object["prototype"]; // Objeto associativo

//console.log(Object.prototype);
//console.log(Object["prototype"]);
/****************************************************/

console.log();

var data = new Date().toLocaleDateString();
console.log(
    "Data atual: ",
    data,
    "Testando as prorpiedades do objeto -> propertyIsEnumerable() / hasOwnProperty()"
);

/*  Testando propriedades de um objeto  

O método propertyIsEnumerable() refina o teste de hasOwnProperty(). Ele retorna true somente se 
a propriedade nomeada é uma propriedade própria e seu atributo enumerável é true. Certas propriedades 
internas não são enumeráveis. As propriedades criadas por código JavaScript normal são 
enumeráveis, a menos que você tenha usado um dos métodos de ECMAScript 5, mostrados posteriormente, 
para torná-las não enumeráveis.*/
// Exemplo 1
// propertyIsEnumerable()
// hasOwnProperty()

var o = { x: 1, y: 2, z: 3 };
console.log(o.propertyIsEnumerable("toString"));
var p = { y: null, z: -14 };

function receveOBJ(obj) {
    if (
        obj.x in p ||
        obj.y !== null ||
        (obj.z.lenght >= 0 && obj.propertyIsEnumerable() !== null) ||
        obj.hasOwnProperty() !== null
    ) {
        console.log("p.x: ", obj.x, "p.y: ", obj.y, "p.z: ", obj.z);
        if (obj.propertyIsEnumerable()) {
            console.log("p.propertyIsEnumerable() AQUI !");
        }
    }

    console.log(obj.propertyIsEnumerable("toString"), " -> toString_1");
    console.log(obj.hasOwnProperty("toString", " -> toString_2"));
}

receveOBJ(p);
console.log(receveOBJ(p));
