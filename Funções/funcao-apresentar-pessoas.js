function apresentar(pessoa) {
    if (pessoa.idade < 21) {
        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
}

const pessoa1 = {
    nome: "Otto",
    idade: 27,
    profissao: "estudante"
}

apresentar(pessoa1);

const pessoa2 = {
    nome: "Ana",
    idade: 18,
    profissao: "estudante"
}

apresentar(pessoa2);

const pessoa3 = {
    nome: "Caio",
    idade: 77,
    profissao: "aposentado(a)"
}

apresentar(pessoa3);
