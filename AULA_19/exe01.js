/*
Primitivos (imutáveis) - string, number, boolean, undefind, null (bigint, symbol)
*/

//          0123
//let nome = 'Luiz';
//nome[0] = 'R'; //não conseguimos modificar para R pq a string é imutável
//console.log(nome[0], nome);

let a = 'A';
let b = a; // aqui estou fazendo uma cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);