'''
Crie uma situação em que ocorra uma exceção dentro de um código.
Utilize try/catch para realizar a captura e tratamento dessa exceção. 
______________________________________________________________________

**No phyton "except" equivale ao "catch"**

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