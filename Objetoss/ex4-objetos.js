// const cliente = {
//     nome: "Regina",
//     valorAPagar: 100,

// }

// console.log(`Olá ${cliente.nome}, foi um prazer.
// O valor à pagar é ${cliente.valorAPagar} reais.`)



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
let totalAPagar = 0;
for (let produto of cartao.produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quantidade;

}
console.log(`Sr. ${cartao.nome}, o total à pagar é R$ ${(totalAPagar / 100).toFixed(2)}`);