// First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript)
// trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros 
// tipos (atribuição, retorno, parâmetro), 
// e HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.

// HOFs nos permitem compactar ações e não somente repassar valores.
// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

// 1- Crie uma função que retorne a string 'Acordando!!';
const acordando = () => 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const cafe = () => 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const dormir = () => 'Partiu dormir!!'
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console 
// o resultado da execução das funções que você criou nos exemplos anteriores.
const doingThings = (func) => console.log(func());
doingThings(dormir);