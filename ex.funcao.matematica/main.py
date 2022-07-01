'''

                            Online Python Compiler.
                            
            Faça uma função calculadora de dois números com três parâmetros:
            os dois primeiros serão os números da operação e o terceiro será 
            a entrada que definirá a operação a ser executada. Considera a 
            seguinte definição:
            1. Soma
            2. Subtração
            3. Multiplicação
            4. Divisão

'''
def operacaoInvalida():
    print("Operação inválida.")
def operacao(num1, num2, operacao):
    if(operacao == 1):
        return num1 + num2
    elif(operacao ==2):
        return num1 - num2
    elif(operacao == 3):
        return num1 * num2
    elif(operacao == 4):
        return num1 / num2
    else:
        return operacaoInvalida()

print(operacao(10,2,1))
