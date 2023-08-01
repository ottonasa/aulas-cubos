const pessoa = {
    nome: "Otonyel",
    idade: 27,
    altura: 1.80,
    cidade: "Curitiba",
    profissao: "Dev"
}
// const nome = pessoa.nome;
// const idade = pessoa.idade;

const { nome, idade, profissao, ...outros } = pessoa;

console.log(nome, idade, profissao);

console.log(outros)