// criar array com cinco paises
const paises = ['Brasil', 'EUA', 'Japão', 'Peru', 'Austrália'];
console.log(paises);


// adicionar pais ao fim da lista
paises.push('Argentina');
console.log(paises);

// remover pais do final da lista
paises.pop();
console.log(paises);

// adicionar pais ao inicio da lista
paises.unshift('Canadá');
console.log(paises);

// remover um pais do do inicio da lista
paises.shift();
console.log(paises);

// imprima o ultimo pais da lista
const ultimo = paises[paises.length - 1]
console.log(ultimo)

// imprima o segundo pais da lista
console.log(paises[1])

// imprima pais de indice 2 da lista
console.log(paises[2])
