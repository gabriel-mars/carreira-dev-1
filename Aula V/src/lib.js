//console.log("Hello world");
//alert("Bem-vindo ao mundo do JS!")

let contagem = 0;

const visor = document.querySelector("#valor-contador");
const botaoMenos = document.querySelector("#btn-diminuir");
const botaoReset = document.querySelector("#btn-zerar");
const botaoMais = document.querySelector("#btn-aumentar");

function atualizarInterface() {
    visor.textContent = contagem;

    if (contagem > 0) {
        visor.style.color = "#10b981";
    } else if (contagem < 0) {
        visor.style.color = "#ef4444";
    } else {
        visor.style.color = "#0f172a";
    }
}

botaoMenos.addEventListener("click", () => {
    contagem--;
    atualizarInterface();
});

botaoReset.addEventListener("click", () => {
    contagem = 0;
    atualizarInterface();
});

botaoMais.addEventListener("click", () => {
    contagem++;
    atualizarInterface();
});