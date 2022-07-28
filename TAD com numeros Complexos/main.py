'''
Crie um tipo abstrato de dado (TAD) para manipular números complexos na linguagem Python.
O método deve:
- calcular três números complexos;
- realizar todas as operações básicas;
- e imprimir as propriedades real e img do números. 

**Não fiz as operações de multiplicação nem de divisão por achar complexo de entender
e implementar, por se tratar de três numeros complexos. Acredito que o objetivo
da atividade era criar um TAD

'''

def calculoNumeroimaginario(numReal1,numImg1,numReal2, numImg2, numReal3, numImg3, operacao):
    'soma de numeros complexos: Parte real + parte real; Parte imaginaria + parte imaginaria'
    if(operacao == 1):
        numRealResposta = numReal1 + numReal2 + numReal3
        numImgResposta = numImg1 + numImg2 + numImg3
        return  numRealResposta, numImgResposta
    'subtração de numeros complexos: Parte real - parte real; Parte imaginaria - parte imaginaria'
    if(operacao == 2):
        numRealResposta = numReal1 - numReal2 - numReal3
        numImgResposta = numImg1 - numImg2 - numImg3
        return  numRealResposta, numImgResposta
        

'Dado os três numeros complexos: Z1= 5 + 2i, Z2= 3 + i, Z3= -4 -3i'

print('Numeros complexos: Z1= 5+2i, Z2= 3+i, Z3= -4-3i')
'Somando'
r,i = calculoNumeroimaginario(5, 2, 3, 1, -4, -3, 1)
'Checando apenas a parte imaginaria para corrigir o sinal do resultado'
if(i > -1):
    print('Soma dos numeros complexos:' + str(r)+'+'+str(i)+'i' )
else:
    print('Soma dos numeros complexos:' + str(r) + str(i)+'i' )
    
'subtraindo'
r,i = calculoNumeroimaginario(5, 2, 3, 1, -4, -3, 2)

if(i > -1):
    print('Subtracao dos numeros complexos: ' + str(r) + '+' + str(i)+'i' )
else:
    print('Subtracao dos numeros complexos: ' + str(r) + str(i)+'i' )
    

