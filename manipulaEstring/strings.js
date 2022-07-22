/* Estruture três códigos, os quais devem conter 
uma função de manipulação de string que obtenha resultado. */

const frase = "Ana gosta de jogar BASQUETE";


//Transforma uma frase recebida em todas suas letras maiúsculas
function letrasMaiusculas(frase){
    return frase.toUpperCase()
}
//faz o inverso da anterior, deixa todos os caracteres em minúsculo
function letrasMinusculas(frase){
    return frase.toLowerCase()
}
//Retorna a quantidade de caracteres que frase possui(espaço conta como 1 caracter)
function quantidadeCaracter(frase){
    return frase.length;
}

let fraseMaiuscula;
fraseMaiuscula = letrasMaiusculas(frase);
//a frase será exibida com todas as letras maiúsculas
console.log(fraseMaiuscula)

let quantidade;
quantidade = quantidadeCaracter(frase);
//será exibida a quantidade de caracter
console.log("Quantidade de caracteres: ",quantidade);

let fraseMinuscula;
fraseMinuscula = letrasMinusculas(frase)
//será exibida a frase com todas as letras minúsculas
console.log(fraseMinuscula)


