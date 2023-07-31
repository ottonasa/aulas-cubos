
const cartao = {
    nome: "Otonyel",
    idade: 27,
    produtosConsumidos: [
        {
            nome: "Mouse",
            precoUnit: 6000,
            quantidade: 3

        },
        {
            nome: "Teclado",
            precoUnit: 9000,
            quantidade: 1
        },
        {
            nome: "Tela",
            precoUnit: 20000,
            quantidade: 1
        }
    ]
};

console.log(cartao.nome);
console.log(cartao.idade);
cartao.idade = 29;
console.log(cartao.idade);
console.log(cartao.produtosConsumidos[0]);
console.log(cartao.produtosConsumidos[0].nome);
