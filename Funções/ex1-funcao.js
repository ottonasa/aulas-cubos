let pessoaObjeto = {
    nome: "Otto",
    idade: 27,
    profissao: "estudante",
    altura: 1.8
}

function mensagem(pessoa) {
    console.log(`Olá, Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`)
}

mensagem(pessoaObjeto);
