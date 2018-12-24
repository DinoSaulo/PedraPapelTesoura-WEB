console.log("Funcionando");

const pontuacaoUsuario = 0;
const pontuacaoComputador = 0;
const pontuacaoUsuario_span = document.getElementById("user-score");
const pontuacaoComputador_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const pedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tesoura_div = document.getElementById("s");

function getEscolhaComputador() {
    const opcoes = ['r', 'p', 's'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opcoes[numeroAleatorio];
}


function game(escolhaDoUsuario){
    const escolhaDoComputador = getEscolhaComputador();
    console.log("Escolha do usuário => " + escolhaDoUsuario);
    console.log("Escolha do Computador => " + escolhaDoComputador);
    switch (escolhaDoUsuario + escolhaDoComputador) {
        case "rs":
        case "pr":
        case "sr":
            console.log("USER WINS.");
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("USER LOSES.");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("IT'S A DRAW.");
            break;
    }
}

pedra_div.addEventListener('click', function() {
    console.log("Você clicou em Pedra");
    game("r");
})

papel_div.addEventListener('click', function() {
    console.log("Você clicou em Papel");
    game("p");
})

tesoura_div.addEventListener('click', function() {
    console.log("Você clicou em Tesoura");
    game("s");
})