// 1)Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
// criar uma variavel que armazene o número 10
// let n = 10;
//criar uma variavel para armazenar o resultado igual a um
// let result = 1;
// fazer um for que iniciei do número 1 até n
// for(let index = 1; index <= n; index += 1){
// criar uma variavel para acrescentar cada index já multiplicando
// result *= index    
// }
// imprimir resultado
// console.log(result)

// 2)Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
//Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// criar uma variavel com a palavra na string
// let word = 'tryber';
// criar uma variavel com string vazia para armazenar a nova palavra invertida
// let invert ='';
// criar um for inicializando pelo tamanho do ultimo indice da string, com leght e vai tirando 1 até 0
// for( index = word.length -1; index >= 0; index -= 1){
//acrescentar cada letra no invert
// invert += word[index]
// }
// console.log(invert)

// // 3)Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// // Escreva dois algoritmos: um que retorne a maior palavra deste array e 
// // outro que retorne a menor. Considere o número de caracteres de cada palavra.
// //criar uma variavel
// let maiorPalavra = [0];
// let menorPalavra = [0];
// menorPalavra.length = 46

// // fazer um for para percorrer cada elemento do array
// for(let index = 0; index < array.length; index += 1){
//     if(array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index]
//     }
// }

// for(let index = 0; index < array.length; index += 1){
//     if(array[index].length < menorPalavra.length){
//         menorPalavra = array[index]
//     }
// }

// console.log(maiorPalavra)
// console.log(menorPalavra)

// 4)Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, 
// é divisível por 1 e por ele mesmo. Escreva um algoritmo que retorne o maior número primo entre 2 e 50.
  
function primos(){

    // for para fazer o numero
    for(let number = 2; number <= 50; number +=1){
        let contador = 0;
        // for para percorrer cada número
        for(let divisor = 2; divisor <=50; divisor += 1){
            
        }
    }
}
console.log(primos())