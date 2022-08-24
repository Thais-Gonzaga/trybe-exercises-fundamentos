// Exemplos da aula:
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((element) => {
//     console.log(`${element} * 2: ${element * 2}`);
//   });

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// names.forEach((name, index) => {
//     names[index] = name.toUpperCase();
//   });
// console.log(names);
// ---------------------------------------------------------------------------------

// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList);
// -----------------------------------------------------------------------------------
// array.find

//1) Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//   return numbers.find ((number) => number % 3 === 0 && number % 5 === 0);
// }

// console.log(findDivisibleBy3And5());

//2) Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//  return names.find((name) => name.length === 5;
// }

// console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//  return musicas.find((musica) => musica.id === id);
// }

// console.log(findMusic('31031685'));
// -------------------------------------------------------------------------------
// Some retorna true se ao menos um elemento de um array satisfaz a uma condição. 
// Every retorna true se todos os elementos de um array satisfazem a uma condição.
// 1:
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((names) => names === name);
// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Rachid'));

// // 2:
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => arr.every((obj) => obj.age >= minimumAge);
// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 16));
// -----------------------------------------------------------------------

// Array.sort
// Sort permite ordenar um array de acordo com algum critério estabelecido. 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); 
//  [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// console.log(points);
 // [ 100, 40, 25, 10, 5, 1 ]
//  --------------------------------------------------------------------------------------

//1 - Utilize sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age)
console.log(people);

//2 -Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

people.sort((a, b) => b.age - a.age)
console.log(people);