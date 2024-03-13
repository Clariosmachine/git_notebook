/*
**Array **
* É um conjunto ordenado de valores, chamados de elementos;
* Os elementos podem ser acessados por índices;
* Cada elemento pode ser de um tipo diferente;
* Todo array tem a propriedade length;
* As Strings se comportam como arrays de caracteres;
*/

/*
Um array pode ser criado em sua forma literal apenas indicando que uma variável recebe o valor igual a dois colchetes:

```
var empty = [];  // Um array sem elementos
var primes = [2, 3, 5, 7, 11];  // Um array com 5 elementos numéricos
var misc = [ 1.1, true, "a", ];  // 3 elementos de vários tipos + vírgula à direita
```

Uma maneira menos usual é criar um array da maneira "explícita". Isso ocorre realizando a atribuição à função construtora de array:

```
let listaTeste = new Array()  // Cria um array sem elementos

let aFazer = new Array(10)  // cria um array com comprimento especificado, mas sem elementos nem índices. Apenas reserva a qtde de índicese especificada.
console.log(aFazer[5])
// -> undefined
```

Especificação explícita de dois ou mais elementos de array ou de apenas um elemento não numérico para o array:
 ```
 var a = new Array(5, 4, 3, 2, 1, "testing, testing");
 // é a mesma coisa de "var a = [5, 4, 3, 2, 1, 'testing, testing']"
 ```
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

// Array esparso
const listaEsparsa = [1, 2, , , ,25]
console.log(listaEsparsa[3], listaEsparsa[0])  // acessando índice que mostrará o valor 'undefined'
// -> undefined 1

console.log(listaEsparsa.length)  // Mostra quantos elementos existem dentro do array. Espaços em branco são contados como elementos undefined.
// -> 6

var aFazer = new Array(3)
console.log(aFazer[15])
console.log(aFazer)
// -> undefined
// -> [ <3 empty items> ]

/*
Para adicionar valores em um array basta informar o índice e o valor desejado:
*/

var carros = []
carros[0] = 'Uno'
carros[1] = 'Palio'
console.log(carros)

// -> [ 'Uno', 'Palio' ]

// Outra forma de adicionar valores é usando o método _push()_. Os argumentos passados para esse método serão adicionados ao final do array:

carros.push('Gol', 'Strada')
console.log(carros)
// -> [ 'Uno', 'Palio', 'Gol', 'Strada' ]

/*
O método unshift() pode ser usado para inserir um valor no início de um array, deslocando os elementos existentes no array para índices mais altos.
*/

carros.unshift('Tempra')
console.log(carros)
// -> [ 'Tempra', 'Uno', 'Palio', 'Gol', 'Strada' ]

/*
é possível excluir elementos do final de um array, simplesmente configurando a propriedade length com o novo comprimento desejado
*/
carros.length = 4
console.log(carros)
// -> [ 'Tempra', 'Uno', 'Palio', 'Gol' ]
// O último elemento foi excluído para que o array fique no tamanho indicado (eram 5 elementos, agora 4)

/*
Os arrays têm um método pop() (ele funciona com push()) que reduz o comprimento de um array de 1, mas também retorna o valor do elemento excluído.
Assim é possível criar uma variável com o último valor do array enquanto que esse valor é excluído do final do array.
*/

carros.push('Saveiro')
console.log(carros)
// -> [ 'Tempra', 'Uno', 'Palio', 'Gol', 'Saveiro' ]
carros.pop()
console.log(carros)
// -> [ 'Tempra', 'Uno', 'Palio', 'Gol' ]

/*
Há o método shift() (que faz par com unshift()) removendo um elemento do início de um array.
Todos os outros itens são deslocados para um índice menor.
*/

carros.shift()
console.log(carros)
// -> [ 'Uno', 'Palio', 'Gol' ]
// Foi removido o primeiro item do array (índice 0)

/*
Outros métodos de array a serem estudados:
* join()
* reverse()
* sort()
* concat()
* slice()
* splice()
* push() e pop()
* unshift() e shift()
* toString() e toLocaleString()
* 
*/