//Desestruturação de Códigos

const usuario = {
    nome: 'Gustavo',
    idade: 20,
    endereco: {
        cidade: 'Cotia',
        estado: 'São Paulo'
    },
};

const {nome, idade, endereco: { cidade, estado}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);
//Exibindo no console usando a Desestruturação de códigos


//Função que normalmente recuperiariamos o nome
function mostraNome(usuario){
    console.log(usuario.nome);
}

mostraNome(usuario);

//Função que recupera o nome utilizando a desestruturação
function mostraNome2({ nome }){
    console.log(nome);
}

mostraNome2(usuario);


