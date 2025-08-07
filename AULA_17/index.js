/*
function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));
console.log(soma(5,10));
console.log(soma(3,2));

const resultado = soma(6,10);
console.log(resultado);
*/

//-------------------------------

/*
function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

//const resultado = soma(4,2);
const resultado = soma(4);
console.log(resultado);
*/

//-----------------------------

//função anônima
const raiz = function(n){
    return n ** 0.5; //calcula a raiz quadrada
}; //neste caso precisamos terminar a função com ';'

console.log(raiz(9));