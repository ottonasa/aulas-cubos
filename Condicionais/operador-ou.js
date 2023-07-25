const temIngresso = true;
const censura = 16;
const idade = 18;
const estaComOsPais = true;

// tem ingresso
// tem idade maior ou  igual ou a censura OU está com os pais


if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada")

}