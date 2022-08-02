/**
 * Com os conceitos aprendidos, crie um programa de calculadora que: 

receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

 */
var num1 = parseInt(prompt('Digite o primeiro valor: '))
var operacao = prompt("Operação: ")
var num2 = parseInt(prompt('Digite o segundo valor: '))
var resultado;

switch (operacao){
    case '+':
        resultado = num1 + num2
        break
    case '-':
        resultado = num1 - num2
        break
    case '*':
        resultado = num1 * num2
        break
    case '/':
        if(num2 == 0){
            alert("Não é possivel dividir por zero");
            break
        }else{
        resultado = num1 / num2
        var sobra = num1 % num2
            if(sobra != 0){
                    //Função "Math.trunc" própia do JavaScript irá desconsiderar a dizima da divisão
            alert(`Resultado inteiro da divisao: ${Math.trunc(num1 / num2)}`);
            alert(`Sobra da divisão: ${sobra}`)
            //resultado com a dizima
            alert(`Resultado real: ${resultado}`)
            }else{
                alert(`Resultado:  ${resultado}`)
            } 
        } 
        break
    //Qualquer outra entrada para "operação", que nao seja os casos acima, irá entrar aqui
    default:
        alert("Operação invalida");
        
}
//Se não tem resultado, não foi digitado uma operação válida
//operação de divisao tem sua própia saída de resultado
if(resultado != undefined && operacao != '/'){
    alert(`Resultado:  ${resultado}`)
}
