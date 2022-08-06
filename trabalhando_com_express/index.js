/**
 * Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá elaborar
 *  uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). Depois, faça um teste em 
 * aplicações de rota, como o Postman ou o Insomnia, para confirmar se o retorno está coerente com 
 * o que você programou.

    Observação: os prints, ou o próprio código, devem ser divididos por arquivos. Por exemplo, 
    o código de rotas está em um arquivo diferente do código de conexão.
 */

import  express  from "express";
//importa "tudo" como "bancoDeDados" que ta em "Users.js"
import * as bancoDeDados  from "./Users.js" 
import { json } from "express";

const app = express();
//fazendo a constante "app" aceitar o formato json para usar o método "Post", recebendo uma requisição
app.use(express.json())
let usuarios = []
//porta que o express irá usar
app.listen(3000, () =>{
    console.log("Servidor iniciado")
});
//fazendo um get em localhost:3000/users
app.get('/users', (requisicao, resposta) =>{
    //irá mostrar o objeto usuarios e seus valores
    return resposta.send(bancoDeDados.usuarios)
});

//post em localhost:3000/users
//deverá ser enviado um usuario novo no body da requisição
app.post('/users', (requisicao, resposta) =>{
    const novoUsuario = requisicao.body;
    bancoDeDados.cadastraUsuario(novoUsuario)

    return resposta.send(`Usuario ${novoUsuario.nome} cadastrado com sucesso`)
})

