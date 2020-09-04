"use strict";

//Aula de Valores Padrão
function soma(a, b) {
  return a + b;
}

console.log(soma(1));
console.log(soma()); // Essa função sem passar os dois parametros retorna NAN
//No caso não funciona pois devemos passar os dois parametros para somar.
//Devemos definir valores padrão da seguinte forma:

function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
}

console.log(soma2());
console.log(soma2(5));
console.log(soma2(5, 5)); //Também conseguimos utilizar valores padrão para arrow functions, dessa forma:

var soma3 = function soma3() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};

console.log(soma3(12, 12));
console.log(soma3());
console.log(soma3(11));
