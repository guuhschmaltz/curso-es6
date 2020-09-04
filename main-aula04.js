const arr = [1, 3, 4, 5, 8, 9];

//O Map percorre o retor e retorna uma informação
const newArr = arr.map(function(item, index){
   // return item * 2;
    return item + index;
})
console.log(newArr); // Essa função (item *2) irá o retonar o seguinte array:
                    // [2, 6, 8, 10, 16, 18]
                    // Essa função (item + index) irá o retonar o seguinte array:
                    // [1, 4, 6, 8, 12, 14]

//O reduce transforma a variavel em um único número
const sum = arr.reduce(function(total, next){
    return total + next;
})
console.log(sum); // Essa função irá retornar o total + o próximo item, simulando na pratica ficaria:
                    //Inicialmente o total é 0, o próximo item é o número "1", fazendo com que o total vire 1.
                    //Inicialmente o total é 1, o próximo item é o número "3", fazendo com que o total vire 4.
                    //Inicialmente o total é 4, o próximo item é o número "4", fazendo com que o total vire 8.
                    //Inicialmente o total é 8, o próximo item é o número "5", fazendo com que o total vire 13.
                    //Inicialmente o total é 13, o próximo item é o número "8", fazendo com que o total vire 21.
                    //Inicialmente o total é 21, o próximo item é o número "9", fazendo com que o total vire 30.


//O filter serve para fazermos filtros nas funções que iremos retornar.
const filter = arr.filter(function(item){
    return item % 2 === 0;
})
console.log(filter);     //Função de filtro para retornar apenas números pares.



//O find serve para procurar algo dentro de um array
const find = arr.find(function(item){
    return item === 4;
    // caso utilizarmos uma lógica que não existe exemplo: item === 2, retornaria "undefined".
})
console.log(find); // Função de "achar" um item que seja igual a quatro