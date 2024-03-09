/******************************************************* */
// usando o método Before
const containerBefore = document.querySelector(".container"); // seleciona o container
const newParagraphBefore = document.createElement("p"); // cria um novo parágrafo com tag '<p></p>'
newParagraphBefore.innerText = "Eu sou um novo parágrafo!"; // adiciona um texto ao parágrafo
containerBefore.before(newParagraphBefore); // adiciona o parágrafo antes do container

/******************************************************* */
// usando o método After
const containerAfter = document.querySelector(".container"); // seleciona o container
const newParagraphAfter = document.createElement("p"); // cria um novo parágrafo com tag '<p></p>'
newParagraphAfter.innerText = "Eu sou um novo parágrafo!"; // adiciona um texto ao parágrafo
containerAfter.after(newParagraphAfter); // adiciona o parágrafo depois do container

/******************************************************* */
// usando o método insertBefore para adicionar um elemento filho
const containerInsertBefo = document.querySelector(".container");
const paragrafo = containerInsertBefo.querySelector(".paragrafo");

const newParagraphInsertBefo = document.createElement("p");

const newH2 = document.createElement("h2");
newH2.innerText = "Eu sou um novo h2!";

newParagraphInsertBefo.textContent = "Eu sou um novo parágrafo!";

containerInsertBefo.insertBefore(
    newParagraphInsertBefo,
    containerInsertBefo.firstElementChild
);

/******************************************************* */
// usando o método appendChild para adicionar um elemento filho
const containerAppend = document.querySelector(".container");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Eu sou um novo parágrafo!";
containerAppend.appendChild(newParagraph);

/******************************************************* */
// usando o método appendChild para adicionar um elemento filho com texto
const containerInsert = document.querySelector(".container");
const newDiv = document.createElement("div");
newDiv.innerText = "Eu sou uma nova div!";

containerInsert.appendChild(newDiv, containerInsert.firstElementChild);

/******************************************************* */
// pegar os filhos do componente
const container = document.querySelector(".container");

/******************************************************* */
// Não serve para usar com forEach()
console.log(container.children);

/******************************************************* */
// Vem com os espaços entre os elementos
console.log(container.cloneNode(true));

/******************************************************* */
// Como se deve iterar sobre os elementos para criar um html
const children = Array.from(container.children);
children.forEach((child) => {
    console.log(child);
});

// for (let i = 0; i < children.length; i++) {
//     console.log(children[i]);
// }

/******************************************************* */
// pegando o primeiro filho
const firstChild = container.firstElementChild;
console.log(firstChild);

/******************************************************* */
// pegando o último filho
const lastChild = container.lastElementChild;
console.log(firstChild);

/******************************************************* */
// pegando o próximo irmão
const nextSibling1 = firstChild.nextSibling;
console.log(nextSibling1);
const nextSibling2 = firstChild.nextElementSibling;
console.log(nextSibling2);

const previousSibling = nextSibling.previousSibling;
console.log(previousSibling);

const previousSibling1 = nextSibling.previousElementSibling;
console.log(previousSibling1);

const h2 = document.querySelector("h1");
const p = document.querySelector("p");

console.log(h2.previousElementSibling); // pega o elemento em si
console.log(p.previousSibling); // pega os texto e espaçamentos entre os elementos
