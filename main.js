const alunos = [
    { nome: 'Tulio', nota: 8 },
    { nome: 'Lucas', nota: 5 },
    { nome: 'Jennifer', nota: 7 },
    { nome: 'Liminha', nota: 9 },
    { nome: 'Rafael', nota: 4 },
];

function filtroAlunos(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtroAlunos(alunos);

for (i = 0; i < alunosAprovados.length; i++) {
    console.log(`${alunosAprovados[i].nome} foi aprovado devido a média maior que 6.`)
}