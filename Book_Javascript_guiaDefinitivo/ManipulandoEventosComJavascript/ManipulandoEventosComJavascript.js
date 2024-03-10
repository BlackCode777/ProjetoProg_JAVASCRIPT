const acionarAlert = (value) => {
    alert(value);
};

/* <button class="class-button">Clique aqui</button> */
const btn = document.querySelector("button");
btn.onclick = function alertOne() {
    alert("Você clicou no botão!");
};
