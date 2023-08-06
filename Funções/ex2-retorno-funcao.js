function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade < 66) {
        return "Adulto(a)";
    } else {
        return "Idoso(a)"
    }
}

// const valorRetornadoPelaFuncao = determinarFaixaEtaria(70);
// console.log(valorRetornadoPelaFuncao);

console.log(determinarFaixaEtaria(18));