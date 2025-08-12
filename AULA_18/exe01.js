/*
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;
*/

// para não termos que fazer da forma de cima , onde para cada pessoa teríamos que criar mais variáveis, podemos criar um objeto. Para criarmos um objeto usamos chaves.

/*
const pessoa01 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
};

const pessoa02 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55,
};

console.log(pessoa01.nome);
*/

// podemos melhorar o código acima criando uma função
function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Silva', 69);
console.log(pessoa1.nome, pessoa2.nome);