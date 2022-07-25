//Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e 
//faça com que todos eles sejam funções de um mesmo arquivo. 
//As variáveis que você define no começo de cada arquivo devem ser removidas e 
//transformadas em parâmetros das funções.

// 1)Faça cinco programas, um para cada operação aritmética básica. 
// // Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
// let a = 10;
// let b = 15;

// function soma(a , b) {
//     return a + b;
// };
// console.log(soma(a, b))

// function sub(a , b) {
//     return a - b
// };
// console.log(sub(a, b))

// function mult(a , b) {
//     return a * b
// };
// console.log(mult(a, b))
// function div(a , b) {
//     return a / b
// };
// console.log(mult(a, b))

// function modulo(a , b) {
//     return a % b;
// };
// console.log(modulo(a, b))

// 2)Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes com os valores que serão comparados.


// const c = 2;
// const d = 5;
// function maiorNumber(c, d){
//     if(c > d ) {
//     return c
//     } else{
//      return d
//     }
// }
// console.log(maiorNumber(c, d))


// 3)Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três constantes com os valores que serão comparados.

// const c = 2;
// const d = 5;
// const e = 9;

// function maior(c, d, e){
//     if(c > d && c > e ) {
//         return c
//     }else if( d > e && d > c ){
//         return d
//     }else{
//         return e
//     }
// }
// console.log(maior(c, d, e))

// 4)Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, 
// "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

// const number = -10;
// function define (number){
//     if(number === 0){
//         return 'zero'
//     }else if(number > 0){
//         return 'positive'
//     } else{
//         return 'negative'
//     }
// }
// console.log(define(number))

// 5)Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const angulo1 = -20;
const angulo2 = -50;
const angulo3 = 100;


function triangulo ( angulo1, angulo2, angulo3){
    let soma = angulo1 + angulo2 + angulo3
    if( angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
        return ' erro'
    }else if(soma === 180){
        return 'true'
    }else if(soma !== 180){
        return 'false'
    }
}
console.log( triangulo(angulo1, angulo2, angulo3))

