'''

                            Online Python Compiler.

O programa lerá esse arquivo e criará duas colunas. A primeira coluna será
“media”, que terá a média das duas notas do aluno. A segunda será “situacao”, 
com os valores: APROVADO ou REPROVADO.

O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado
O programa deverá salvar esse novo dataframe com o nome “alunos_situacao.csv”.

Por fim, o programa deverá mostrar na tela:
- o maior número de faltas;
- a média geral das notas dos alunos;
- e a maior média.

Veja em anexo um exemplo do arquivo “notas_alunos.csv”.
ANEXO:
https://drive.google.com/file/d/1DBjw0RuLmmu9D9E15jxnbmX8kkHuyYvO/view
'''
import pandas as pd

df = pd.read_csv("notas_alunos.csv")

media = (df["nota_1"] + df["nota_2"]) / 2
df["media"] = media

df.loc[df["media"] >= 7 and df["faltas"] < 5, "situacao"] = "APROVADO"
df.loc[df["media"] < 7 or df["faltas"] > 5, "situacao"] = "REPROVADO"

maior_faltas = df["faltas"].max()
media_geral = df["media"].median()
maior_media = df["media"].max()

print('O maior número de faltas: ' + str(maior_faltas))
print("A média geral das notas: " + str(media_geral))
print('A maior média: ' + str(maior_media))
