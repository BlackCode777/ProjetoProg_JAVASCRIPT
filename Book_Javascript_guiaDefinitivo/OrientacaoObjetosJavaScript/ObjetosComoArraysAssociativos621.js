console.log("Objetos como arrays associativos");
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

console.log(Object.prototype);
console.log(Object["prototype"]);
