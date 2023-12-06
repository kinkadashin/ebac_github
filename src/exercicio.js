"use strict";
function multiplicacao(num1, num2) {
    return num1 * num2;
}
function saudacao(nome) {
    return "Olá " + nome;
}
const resultado = multiplicacao(10, 10);
const mensagemSaudacao = saudacao("Lucas");
console.log("Resultado da multiplicação:", resultado);
console.log(mensagemSaudacao);
