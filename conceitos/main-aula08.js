//yarn add @babel/plugin-proposal-object-rest-spread

//REST
//Serve para pegarmos o "RESTO" das propriedades

const usuario = {
    nome: 'Gustavo Schmaltz',
    idade: 20,
    empresa: 'Evolve Box'
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

// Outro exemplo:

const arr = [1, 3, 5, 10, 20];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

//Também podemos utilizar rest operators para parâmetros de funções,
//Dessa forma não precisamos passar diversas variaveis, exemplo "a,b,c"
function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4,5));

//SPREAD OPERATOR
//A funcionalidade do Spread é a propagação, o mesmo repassa as informações deu objeto ou array
//Para outra estrutura de dados.

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2]; //Juntamos os dois arrays

console.log(array3);

//Outro exemplo:

const usuario1 = {
    nome: 'Gustavo',
    idade: 20,
    empresa: 'Evolve Box'
};

const usuario2 = {
    ...usuario1,
    nome: 'Felipe'
}; //Copiou todas informações e apenas sobrescreveu o nome

console.log(usuario2);