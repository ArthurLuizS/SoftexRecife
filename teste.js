
/*function imc(){
    Var altura = parseFloat(document.getElementById("altura").value);
    Var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso/ (altura*2) ;
    if(imc >= 18 && imc <= 25 ){
        if(imc==20){
        alert("Parabens você está com o peso ideal");
        }
        else{
            alert("Parabens, você está dentro da media")
        }
    }
    if(imc < 18){
        ("Cuidado! você precisa aumentar seu peso")
    } else {
        alert("Cuidado! você precisa diminuir seu peso")
    }
    
}
    */

/*
const ZE_DELIVERY_IDADE = 6
const ZE_DELIVERY_NOTA_GLASSDOOR = 4.4

const tokenSecreto = number => {
      const respostaFundamental =" aRespostaSobreVidaUniversoTodasAsCoisas()"

       respostaFundamental.length > 30
            ? console.log(respostaFundamental.length * ZE_DELIVERY_IDADE)
            : console.log(respostaFundamental.length * ZE_DELIVERY_NOTA_GLASSDOOR)
}
tokenSecreto() */
array = [3,1,2,3]

bcc = (velas_array) => {
    velas = velas_array.length;
    altura_velas = velas_array;
    QTD_velas_Apagara = 0;
    Maior_vela = Math.max(velas_array) 

        for(let a = 0; a < velas; a++){
            if(velas_array[a] == Maior_vela){
                QTD_velas_Apagara += 1;
            }
        }

    return(QTD_velas_Apagara)
}
console.log(bcc([2,1,2,1,1]));
