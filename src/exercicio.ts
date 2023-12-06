function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultado = multiplicacao(10, 10);
const mensagemSaudacao = saudacao("Lucas");

console.log("Resultado da multiplicação:", resultado);
console.log(mensagemSaudacao);