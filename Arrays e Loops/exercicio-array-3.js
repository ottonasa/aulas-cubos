// Faca um programa que calcula e imprime na tela a soma dos itens de um array

const numeros = [1, 3, 6];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
    // soma += numeros[i];
}
console.log(soma);
