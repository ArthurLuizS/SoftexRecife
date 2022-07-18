
class aluno{
    #nome;
    #age;
    #sexo;
    #cursos = [];
    //construtor definindo quais os dados iniciais a serem preenchidos e enviados na sequencia
    constructor(nome, age, sexo){
        this.#nome = nome;
        this.#age = age
        this.#sexo = sexo
    }
    //método Get
    getDados(){
        return `Nome: ${this.#nome}, idade: ${this.#age}, sexo: ${this.#sexo}, curso: ${this.#cursos}`

    }
    getNome(){
        return this.#nome
    }
    //método Set
    setCursos(curso){
        this.#cursos.push(curso)
    }

    setNome(nome){
        this.#nome = nome;
    }
}
//Parametros do construtor, nome, idade, sexo
const alunoUm = new aluno("Arthur", 28, "M")
//adicionando um curso utilizando metodo set
alunoUm.setCursos("Formação acelerada Softex")
//pegando os dados utilizando metodo get
console.log(alunoUm.getDados())

