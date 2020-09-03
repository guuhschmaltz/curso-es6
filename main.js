class TodoList{
    constructor(){
        this.todos = [];
    }

    static addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}

// TodoList.addTodo(); //Sem utilizar o new, acontecerá o erro porquê:
                    //Quando definimos um método estático, ele não enxerga o restante da classe
                    //Ele não enxergará o this.todos.
                    //Toda vez que tivermos esse método estático, ele basicamente servirá para passarmos uma informação
                    //e retornarmos outra informação independente do restante da classe.
                    //Geralmente quando tivermos métodos estáticos em uma classe, nem teremos constructors,
                    //Será uma classe para nos ajudar com alguma funcionalidade que queremos implementar.
                    //Exemplo abaixo sem o construtor que funciona:

                    class Matematica{
                        static soma(a,b){
                            return a + b;
                        }
                    }

                    console.log(Matematica.soma(1,2));