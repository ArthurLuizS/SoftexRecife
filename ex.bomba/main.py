'''
                            Online Python Compiler.
    Faça um código que execute a contagem regressiva de uma bomba, informando
o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando
contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.


'''
import time;

print('Iniciando a contagem Regressiva: ')
for i in range(10, 0, -1):
 print( i);
 time.sleep(1)
 if(i == 1 ):
  print("***KABUM***")
 