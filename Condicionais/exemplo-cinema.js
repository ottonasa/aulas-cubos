const temIngresso = true;
const censura = 14;
const idade = 13;

// Se ela tem ingresso -> Pode entrar
// Se a idade dela for maior que 14 -> Pode entrar
// Caso contrario -> Nao pode entrar

if (temIngresso & idade >= 14) {
    console.log("Pode entrar")
} else {
    console.log("Não pode entrar")
}


{
    // escrito pelo instrutor

    if (temIngresso === true) {
        if (idade >= censura) {
            console.log("Pode entrar");
        } else {
            console.log("Barrada pela censura.");
        }
    } else {
        console.log("Barrada por falta de ingresso.");
    }
}