/*
Código que eu fiz (deu o mesmo resultado)

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

let resultado = parseFloat(num1) + parseFloat(num2);

alert(`O resultado é ${resultado}.`);
*/

//Abaixo o do professor
let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado da sua conta foi: ${num1 + num2}.`);