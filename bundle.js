"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, null, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo Todo');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}(); // TodoList.addTodo(); //Sem utilizar o new, acontecerá o erro porquê:
//Quando definimos um método estático, ele não enxerga o restante da classe
//Ele não enxergará o this.todos.
//Toda vez que tivermos esse método estático, ele basicamente servirá para passarmos uma informação
//e retornarmos outra informação independente do restante da classe.
//Geralmente quando tivermos métodos estáticos em uma classe, nem teremos constructors,
//Será uma classe para nos ajudar com alguma funcionalidade que queremos implementar.
//Exemplo abaixo sem o construtor que funciona:


var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
