const pessoa = {
    nome: "Otonyel",
    idade: 27,
    altura: 1.80,
    temCNH: true,
    apelidos: ["Otto", "Tetel", "cara", 1]

}
let textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e os seguintes apelidos:`)
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}