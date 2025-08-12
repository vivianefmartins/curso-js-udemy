/*
Primitivos (imutáveis) - string, number, boolean, undefind, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Valores passados por referência
*/

let a = [1, 2, 3]; //nesse caso tanto b quanto a apontam para o mesmo valor na memória
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);