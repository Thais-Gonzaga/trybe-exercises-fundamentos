// exercicio 1:
// const dados = (name) => { 
// const email =  `${name}@trybe.com` 
// return {name, email };
// }

// const newEmployees = (fulname) => {
//   const employees = {
//     id1: fulname('Pedro Guerra'), 
//     id2: fulname('Luiza Drumond'), 
//     id3: fulname('Carla Paiva'), 
//   }
//   return employees;
// };

// console.log(newEmployees(dados));
// --------------------------------------------------------------------------
//exercicio 2:
// const checkNumber = (n, number) => n === number;

// const sorteio = (n,callback ) => {
// const number = () => Math.round((Math.random() * 5) + 1);
// return callback(n, number) ? 'Parabéns você ganhou': 'Tente novamente';
// }
// console.log(sorteio(5, checkNumber));
//  ----------------------------------------------------------------------------
//  exercicio 3:
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const estudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = ( gabarito, estudante) => {
const cont = 0;
const cont1 = 0;
for (let index = 0; index < gabarito.length; index += 1) {
  if (gabarito[index] === estudante[index]) cont += 1;
  if(estudante[index] === 'N.A') cont += 0;
  cont1 += 1;
}
return cont;
}
console.log(check(gabarito, estudante))
// const HOF = (gabarito, estudante, callback) => {
//  return callback(gabarito, estudante)
// }
// console.log(HOF(gabarito, estudante, check))