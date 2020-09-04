//Object Short Syntax
//Exemplo de como passar informações de variaveis para dentro de um usuário

const nome = 'Gustavo';
const idade = 23;

const usuario = {
    //nome: nome,
    nome,
    //idade: idade,
    idade,
    //Quando a propriedade que for criada para o objeto tiver o mesmo nome que a variavel,
    //É conhecido como sintaxe curta ou short syntax, uma sintaxe que o ES6 nos proporciona.
    empresa: 'Evolve Box'
};

console.log(usuario);