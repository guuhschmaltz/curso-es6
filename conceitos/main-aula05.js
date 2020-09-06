const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);
console.log(newArr); //Função que retorna tudo do array multiplicado por 2 utilizando Arrow function.
                    //Detalhe que quando recebemos apenas um parâmetro, podemos remover o parenteses que já tinha,
                    //Antes: .map((item) => {})
                    //Depois: .map(item => {})
                    //Também podemos diminuir e simplificar mais ainda nosso código da forma  seguinte:
                    //Quando retornamos algo simples como item*2, podemos remover os "{}" e passarmos tudo na linha de cima.
                    //Antes: .map(item => { return item * 2 })
                    //Depois: .map(item => item * 2);

                    // ****DETALHE****
                    // A arrow function pode simplificar muito o código mas não podemos utilizar a mesma a todo momento
                    // Uma function de soma que recebemos dois parâmetros por exemplo, não seria interessante o uso de arrow functions.

//Podemos criar funções utilizando constantes:
//Antes

function teste(){
    return 'teste';
}

//Depois
const teste2 = () => {
    return 'teste2';
}
//Não é recomendando o uso, só uma exemplificação.
console.log(teste())
console.log(teste2())

//Exemplo com Arrays:

function teste3(){
    return [1,2,3];
}

const teste4 = () => [3,4,5];

console.log(teste3());
console.log(teste4());

//Ambos retornam o array

//Exemplos com String:
const teste5 = () => 'Teste5';
function teste6(){
    return 'Teste6';
}

console.log(teste5());
console.log(teste6());

//Objetos -> Funciona????????
const testeObjeto = () => { nome: 'Gustavo Schmaltz'};
console.log(testeObjeto());
//Retorna undefined, não funciona, pois a chave serve para o corpo da função,
//então nesse caso, quando queremos uma função que retorna diretamente um objeto, sem ter o "return"
//Colocamos novamente o parenteses, dessa forma

const testeObjeto2 = () => ({ nome: 'Gustavo Schmaltz Teste2'});
console.log(testeObjeto2());
