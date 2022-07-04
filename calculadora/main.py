'''

                    Online Python Compiler.
Faça uma função calculadora que os números e as operações serão 
feitas pelo usuário. O código deve ficar rodando infinitamente até 
que o usuário escolha a opção de sair. No início, o programa mostrará
a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza
qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” 
e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo
valor, um de cada. Depois precisa executar a operação e mostrar o resultado na 
tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e
mostrar o resultado. 

'''

import time;
def operacaoInvalida():
    print("Operação inválida.")
def calculo(num1, num2, operacao):
    if(operacao == 1):
        return num1 + num2
    elif(operacao ==2):
        return num1 - num2
    elif(operacao == 3):
        return num1 * num2
    elif(operacao == 4 and num2 != 0):
        return num1 / num2
    else:
        return operacaoInvalida()
operacao = ''
while( operacao != 0):
    print('Digite a operacao desejada: ')
    operacao = int(input('1: Soma - 2: Subtração -  3: Multiplicaçã - 4: Divisão 0: Sair '))
    if(operacao == 0 ):
        print('Programa Finalizado')
        break
    elif(operacao != 1 and operacao != 2 and operacao != 3 and operacao != 4):
        operacaoInvalida()
        time.sleep(1.5)
        continue
    num1 = float(input('Primeiro numero: '))
    num2 = float(input('Digite o segundo numero: '))
    print('Resultado: ' + str(calculo(num1, num2, operacao)))
    time.sleep(1.5)

