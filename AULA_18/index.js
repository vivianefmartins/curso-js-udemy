const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
//array = 'Outra'; //não pode ser feito com uma constante pq não podemos atribuir outro valor a ela - para modificar desta forma devemos usar let no lugar de const.
console.log(array);