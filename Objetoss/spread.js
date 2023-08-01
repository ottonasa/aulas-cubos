const pessoa = {
    nome: "Otto",
    idade: 27,
    profissao: "Dev"
};

const endereco = {
    rua: "Aqui",
    numero: 146,
    bairro: "Bairro aqui"
}
const objetoFundido = {
    ...pessoa,
    ...endereco
};

console.log(objetoFundido);
