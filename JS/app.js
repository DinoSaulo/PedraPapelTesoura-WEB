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

pedra_div.addEventListener('click', function() {
    console.log("Você clicou em Pedra");
})

papel_div.addEventListener('click', function() {
    console.log("Você clicou em Papel");
})

tesoura_div.addEventListener('click', function() {
    console.log("Você clicou em Tesoura");
})