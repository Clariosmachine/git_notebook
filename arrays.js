/*
**Array **
* É um conjunto ordenado de valores, chamados de elementos;
* Os elementos podem ser acessados por índices;
* Cada elemento pode ser de um tipo diferente;
* Todo array tem a propriedade length;
* As Strings se comportam como arrays de caracteres;

*/

let lista1 = ['João', 35, 'casado', 'Patrícia', [1, 2, 3], 1.73]  // Um array com elementos de tipos diferentes
console.log(lista1)  // Mostra todos os elementos da array
// -> [ 'João', 35, 'casado', 'Patrícia', [ 1, 2, 3 ], 1.73 ]

console.log(lista1[4])  // Mostra apenas um elemento do array, que nesse caso é outra array
// -> [ 1, 2, 3 ]

lista1.push('Rocha')  // Adiciona um item ao final da lista
console.log(lista1)
// -> [ 'João', 35, 'casado', 'Patrícia', [ 1, 2, 3 ], 1.73, 'Rocha' ]

/* 
Quando um array tem várias vírgulas seguidas ele é considerado um array _esparso_.
Esses valores omitidos são considerados valores _undefined_ ao acessarmos seus índices.
*/

const listaEsparsa = [1, 2, , , ,25]
console.log(listaEsparsa[3], listaEsparsa[0])  // acessando índice que mostrará o valor 'undefined'

// -> undefined 1