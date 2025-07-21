//let num1 = 10; //number
//let num2 = 2.5; //number

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(typeof num1);
//console.log(num1.toString(2)); // passa a representação binária da string
//console.log(num1.toFixed(2)); // vai ficar com 2 casas decimais
//console.log(Number.isInteger(num1)); //retorna verdadeiro ou falso - se é um inteiro ou não

/*
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));
*/


//------------------------------//
//IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

/*
num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

num1 = parseFloat(num1.toFixed(2));
*/

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0

console.log(num1);
console.log(Number.isInteger(num1));