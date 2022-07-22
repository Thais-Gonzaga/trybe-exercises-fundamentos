// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1)Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// console.log(numbers)

// 2)some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for(index = 0; index < numbers.length; index += 1){
//     soma += numbers[index] 
//    }
//    console.log(soma)
   
// 3) calcule e imprima a média aritmética dos valores contidos no array;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let media = soma/numbers.length
// console.log(media)

// 4)Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// if(media > 20){
//     console.log("valor maior que 20")
// }else{
//     console.log("valor menor ou igual a 20")
// }

// 🚀 5)Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor = [0];

// for(let index = 0; index < numbers.length; index += 1){
    
//     if(numbers[index] >= maiorValor){
//        maiorValor = numbers[index]
//     }
// }
// console.log(maiorValor)

// 6)Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let numbers = [5, 9, 3, 19, 70, 80, 100, 20, 35, 27];
// let contador = 0;
// for( let index = 0; index < numbers.length; index += 1){
//     if(numbers[index] % 2 !== 0){
//         contador += 1
//     }
// }
// // Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

//     if(contador == 0){
//         console.log("nenhum valor ímpar encontrado")
//     }else{
//         console.log(contador)
//     }

// 7)Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = [300000000000];

// for(let index = 0; index < numbers.length; index += 1){
    
//     if(numbers[index] <= menorValor){
//        menorValor = numbers[index]
//     }
// }
// console.log(menorValor)


// 8)Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// let novoArray = [];
// for(let number = 1; number <= 25; number += 1){
//     novoArray.push(number)
// }
// console.log(novoArray);

// 9)Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
// let novoArray = [];
// for(let number = 1; number <= 25; number += 1){
//     novoArray.push(number/2)
// }
// console.log(novoArray)