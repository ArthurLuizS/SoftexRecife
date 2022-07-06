'''

                            Online Python Compiler.
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto.
Caso o número do voto não corresponda a nenhum candidato ou seja branco, 
ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele 
com o maior número de votos e, também, a quantidade de votos de cada candidato, 
os brancos e nulos 

'''

finalizar = ''
candidato_X = 0 
candidato_Y = 0 
candidato_Z = 0 
nulos = 0

def votacao(voto):
    global candidato_X, candidato_Y, candidato_Z, nulos
    if(voto == 889):
        candidato_X += 1
    elif( voto == 847):
        candidato_Y += 1 
    elif (voto == 515):
        candidato_Z += 1 
    else:
        nulos += 1 
def resultado():
    global ordenou
    if(candidato_X > candidato_Y and candidato_X > candidato_Z):
        print('vencedor: candidato_X' )
        print('votos: ' + str(candidato_X))
        print('Votos do candidato_Y: '+ str(candidato_Y))
        print('Votos do candidato_Z: ' + str(candidato_Z))
    elif(candidato_Y > candidato_Z and candidato_Y > candidato_X):
        print('vencedor: candidato_Y' )
        print('votos: ' +str( candidato_Y))
        print('Votos do candidato_X: '+ str(candidato_X))
        print('Votos do candidato_Z: ' + str(candidato_Z))
    elif(candidato_Z > candidato_X and candidato_Z > candidato_Y):
        print('vencedor: candidato_Z' )
        print('votos: ' + str(candidato_Z))
        print('Votos do candidato_Y: '+ str(candidato_Y))
        print('Votos do candidato_X: ' + str(candidato_X))
    else:
        print('Empate')
        print('votos do candidato_Z: ' + str(candidato_Z))
        print('Votos do candidato_Y: '+ str(candidato_Y))
        print('Votos do candidato_X: ' + str(candidato_X))
     
while(finalizar != 's'):
        try:
            voto = float(input('Digite seu voto: '))
            votacao(voto)
            finalizar = input('Deseja finalizar votação? S  /  N ?')
        except:
            print('Apenas números são aceitos')
resultado()
print('Votos nulos: ' + str(nulos))