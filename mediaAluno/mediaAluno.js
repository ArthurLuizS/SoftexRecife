/**
 * Crie dois códigos de sistema de notas para uma escola.
 * 
 *  O primeiro código deve ser um programa que informa se o aluno reprovou, 
 * ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, 
 * um operador de atribuição e um operador ternário. 
 * 
 * O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa
 a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.
 */


 //Código 1

 var nota1 = parseFloat(prompt("Primeira nota: "))
 var nota2 = parseFloat(prompt("Segunda nota: "))
 var nota3 = parseFloat(prompt("Terceira nota: "))
 var media = (nota1+nota2+nota3)/3
    
    //utilizando operador ternário
 var resultado = (media>=7) ? "Aprovado" : "Reprovado";

 alert(`Resultado: ${resultado}, com média: ${media}`)



 //Código 2

 var nota1 = parseFloat(prompt("Primeira nota: "))
 var nota2 = parseFloat(prompt("Segunda nota: "))
//Para uma média 7, 
//o minimo de pontos da somatoria das três notas deve ser 21(considerando um(a) professor(a) coração de gelo)
 var notaNecessaria = 21;
 
            //outro operador de atribuição, que equivale: 
            //notaNecessaria = 21 - (nota1 - nota2) 
 notaNecessaria -= (nota1 + nota2) 

 alert(`Sua terceira prova deve ser de no mínimo: ${notaNecessaria}`)

 