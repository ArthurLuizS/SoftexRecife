/**
 * Implemente e trate uma conexão com o seu banco de dados, 
 * usando JavaScript. Caso a conexão com o banco tenha sucesso, ele deve 
 * retornar uma frase positiva. Se isso não ocorrer, retorne uma frase informando o erro.
 */

(async () => {
   const database = require('./DB');

    try {
        const resposta = await database.sync();
        console.log("A conexão com o banco de dados teve êxito");
    } catch (error) {
        console.log(`A conexão com o banco de dados falhou! Erro: ${error}`);
    }
})();