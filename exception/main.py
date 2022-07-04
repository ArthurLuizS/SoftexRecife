'''

                            Online Python Compiler.
 Desenvolva um programa que recebe do usuário nome completo e ano de nascimento
 que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o 
 nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o 
sistema informará o erro e continuará perguntando até que um valor correto seja 
preenchido.
'''

valido = True
def calculaIdade(nome, anoNasc):
    if(anoNasc > 1921 and anoNasc < 2022):
        return (nome + ', você terminará 2022 com: ' + str(2022 - anoNasc) + 'anos')
    else:
        raise Exception('')
while(valido):
    try:
        nomeCompleto = input('Nome completo: ')
        anoNasc = int(input('Ano de nascimento: '))
        print(calculaIdade(nomeCompleto, anoNasc))
        valido = False
    except:
        print('Ano inválido, digite um entre 1922 e 2021')
        


  