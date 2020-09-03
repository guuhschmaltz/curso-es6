class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}



//Lista de Todos
class TodoList extends List{
    constructor(){
        super();//A propriedade super basicamente chama o construtor da classe pai, 
                //de forma com que possamos criar novas propriedades
                //Dessa forma conseguimos herdar uma classe, adicionar novos metodos,
                // mutar as informações, chamar o construtor da classe pai e etc.
        this.usuario = 'Gustavo';
    }


    mostraUsuario(){
        console.log(this.usuario);
    }
}

    //class TodoList {
    //constructor(){
    //   this.todos = [];
    //}


//addTodo(){
 //   this.todos.push('Novo Todo');
  //  console.log(this.todos);
//}
//}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('Nuevo Toduuuu');
    //MinhaLista.addTodo();
}

MinhaLista.mostraUsuario();