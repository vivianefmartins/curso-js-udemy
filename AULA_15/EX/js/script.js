const numero = Number(prompt('Digite um número:')); //o Number esta sendo usado aqui para converter o retorno do prompt, que seria uma string, em número. Isso foi necessário para que lá o texto.innerHTML o número fosse somado a 2 e não concatenado.
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>${numero} + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raíz quadrada ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;