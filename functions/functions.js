/**
 * Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
 */

var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
function calculo(ano) {
   
    return anoAtual - ano; 
}

idade = (ano) =>{
    alert(`Certamente você terminará ${anoAtual} com: ${calculo(ano)} anos`);
}

function apresentação() {
   alert("Olá eu sou um programa que irá prever seu futuro")
   idade(parseInt(prompt("Digite seu ano de nascimento: ")));


}

//chamando a função para iniciar o programa
apresentação();

