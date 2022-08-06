
//usuarios que irá simular um banco de dados
let usuarios = [
    {id: 1, nome: "Arthur", age: 28},
    {id: 2, nome: "Luiz", age: 35},
    {id: 3, nome: "Silva", age: 36}
]

function cadastraUsuario(usuarioNovo){
    usuarios.push(usuarioNovo);
}
export{usuarios, cadastraUsuario};