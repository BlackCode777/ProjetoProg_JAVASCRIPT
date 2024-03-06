// manipulando o DOM do arquivo index.html

// pegando o elemento pela div
let h1 = document.querySelector("h1");

// Manipulação de classes com javascript
let h2 = document.querySelector("h2"); // Só pode ser usado com tag (h1)
h2.classList.add("maniClassListJavaScript"); // Adiciona uma classe

// manipulanod h3
let h3 = document.querySelector("h3"); // Selecionando tag (h3)
h3.classList.add("maniClassListJavaScript"); // Adiciona uma classe
//console.log(h3);

function changeH3() {
    if (h3 == document.querySelector("h3")) {
        alert("A classe maniClassListJavaScript foi adicionada");
        h3.classList.add("manipulaTagH3");
    }
}

function changeClass() {
    if (h2.classList.contains("maniClassListJavaScript")) {
        //alert("A classe maniClassListJavaScript foi adicionada");
        if (h2.classList.contains("maniClassListJavaScript")) {
            h2.classList.add("maniClassListJavaScript2");
        }
    }
}

// mudando a cor do h1
function changeColor() {
    let changeColor2 = 0;
    if ((changeColor2) => 0 && changeColor2 <= 5) {
        h1.style.color = "red";
        if (changeColor2 > 5 && changeColor2 <= 10) {
            h1.style.color = "blue";
        } else if (changeColor2 > 10 && changeColor2 <= 15) {
            h1.style.color = "yellow";
        } else {
            h1.style.color = "green";
        }
    }
}

// executando a função changeColor()
changeColor();
changeClass();
changeH3();

// console.log(h1);
