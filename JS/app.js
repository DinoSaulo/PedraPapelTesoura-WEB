console.log("Funcionando");

let pontuacaoUsuario = 1;
pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
const pontuacaoUsuario_span = document.getElementById("user-score");
const pontuacaoComputador_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const pedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tesoura_div = document.getElementById("s");
const pequenaPalavraUsuario = "(você)".fontsize(3).sub();
const pequenaPalavraComputador = "(Computador)".fontsize(3).sub();
const tempoCorDaJogada = 500;

function getEscolhaComputador() {
    const opcoes = ['r', 'p', 's'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opcoes[numeroAleatorio];
}

function atualizarPontuacao() {
    pontuacaoUsuario_span.innerHTML = pontuacaoUsuario;
    pontuacaoComputador_span.innerHTML = pontuacaoComputador;
}

function converterParaPalavra(letra){
    if(letra === "r")
        return "Pedra";
    if(letra === "p")
        return "Papel";
    if(letra === "s")
        return "Tesoura";   
}

function ganhou (escolhaDoUsuario, escolhaDoComputador) {
    pontuacaoUsuario++;
    atualizarPontuacao();
    console.log("GANHOU - Pontuação total => VC:" + pontuacaoUsuario + " PC:" + pontuacaoComputador);
    result_p.innerHTML = `${converterParaPalavra(escolhaDoUsuario)}${pequenaPalavraUsuario} ganha de ${converterParaPalavra(escolhaDoComputador)}${pequenaPalavraComputador}. Você ganhou!!`;
    const escolhaDoUsuario_div = document.getElementById(escolhaDoUsuario);
    escolhaDoUsuario_div.classList.add('green-glow');
    setTimeout( () => escolhaDoUsuario_div.classList.remove('green-glow') , tempoCorDaJogada);
}

function perdeu (escolhaDoUsuario, escolhaDoComputador) {
    pontuacaoComputador++;
    atualizarPontuacao();
    console.log("PERDEU - Pontuação total => VC:" + pontuacaoUsuario + " PC:" + pontuacaoComputador);
    result_p.innerHTML = `${converterParaPalavra(escolhaDoUsuario)}${pequenaPalavraUsuario} perde para ${converterParaPalavra(escolhaDoComputador)}${pequenaPalavraComputador}. Você perdeu!!`;
    const escolhaDoUsuario_div = document.getElementById(escolhaDoUsuario);
    escolhaDoUsuario_div.classList.add('red-glow');
    setTimeout( () => escolhaDoUsuario_div.classList.remove('red-glow') , tempoCorDaJogada)
}

function empatou (escolhaDoUsuario, escolhaDoComputador) {
    console.log("EMPATE - Pontuação total => VC:" + pontuacaoUsuario + " PC:" + pontuacaoComputador);
    result_p.innerHTML = `${converterParaPalavra(escolhaDoUsuario)}${pequenaPalavraUsuario} empata com ${converterParaPalavra(escolhaDoComputador)}${pequenaPalavraComputador}. Você empatou!!`;
    const escolhaDoUsuario_div = document.getElementById(escolhaDoUsuario);
    escolhaDoUsuario_div.classList.add('gray-glow');
    setTimeout( () => escolhaDoUsuario_div.classList.remove('gray-glow') , tempoCorDaJogada);
}

function game(escolhaDoUsuario){
    const escolhaDoComputador = getEscolhaComputador();
    console.log("Escolha do usuário => " + escolhaDoUsuario);
    console.log("Escolha do Computador => " + escolhaDoComputador);
    switch (escolhaDoUsuario + escolhaDoComputador) {
        case "rs":
        case "pr":
        case "sp":
            ganhou(escolhaDoUsuario, escolhaDoComputador);
            break;
        case "rp":
        case "ps":
        case "sr":
            perdeu(escolhaDoUsuario, escolhaDoComputador);
            break;
        case "rr":
        case "pp":
        case "ss":
            empatou(escolhaDoUsuario, escolhaDoComputador);
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
