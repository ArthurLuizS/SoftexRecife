/*
    Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

*/
const aluno = {
    nome: "Arthur Luiz",
    idade: 28,
    matricula: 123456
}
const array = ["Maçã", "Uva", "Abacaxi", "Morango"]


console.log("Propriedades dentro do objeto Aluno")
for(const propriedade in aluno){
    console.log(`${propriedade}: ${aluno[propriedade]}`)
}


console.log("Valores dentro do Array")
for(const elemento of array){
    console.log(`${elemento}`)
}