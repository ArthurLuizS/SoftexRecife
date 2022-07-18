
class Funcionario{
    #nome;
    #age;
    #sexo;
    static #totalFuncionarios = 0;

    static TotalFuncionarios(){
      return Funcionario.#totalFuncionarios;
    }
    static #funcionarios(){
        Funcionario.#totalFuncionarios = Funcionario.#totalFuncionarios + 1;
    }
    constructor(nome, age, sexo){
        this.#nome = nome;
        this.#age = age
        this.#sexo = sexo
        Funcionario.#funcionarios()
       
    }

    getDados(){
        return `Nome: ${this.#nome}, idade: ${this.#age}, sexo: ${this.#sexo}`

    }
}

const funcionarioUm = new Funcionario("Arthur", 28, "M")
const funcionarioDois = new Funcionario("Rafa", 32, "M")
const funcionarioTres = new Funcionario("Maria", 38, "F")


console.log("Total de funcionários: ",Funcionario.TotalFuncionarios())