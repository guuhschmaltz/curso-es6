"use strict";

//Desestruturação de Códigos
var usuario = {
  nome: 'Gustavo',
  idade: 20,
  endereco: {
    cidade: 'Cotia',
    estado: 'São Paulo'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado); //Exibindo no console usando a Desestruturação de códigos
//Função que normalmente recuperiariamos o nome

function mostraNome(usuario) {
  console.log(usuario.nome);
}

mostraNome(usuario); //Função que recupera o nome utilizando a desestruturação

function mostraNome2(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome2(usuario);
