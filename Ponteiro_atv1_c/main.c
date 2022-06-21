/******************************************************************************
Crie um vetor com ponteiros utilizando alocação dinâmica na linguagem C, que:

- use a função realloc;
- use a função sizeof;
- que tenha tamanho 22 de vetor;
- depois libere o bloco utilizando a função free.

*******************************************************************************/



#include <stdio.h>
#include <stdlib.h>

int main()
{
//Assumindo que o vetor será de inteiros;
int *PtV ;
//Criando com tamanho 12 para usar a próxima função e ter o tamanho desejado (22)
PtV = (int*) malloc (12 * sizeof(int) );
//Utilizando realloc para ter o tamanho exigido de 22
PtV = realloc (PtV, 22 * sizeof(int) );
//liberando o bloco
free(PtV);


    return 0;
}
