/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é de 25.925925
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

/*
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg, tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);
*/

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);