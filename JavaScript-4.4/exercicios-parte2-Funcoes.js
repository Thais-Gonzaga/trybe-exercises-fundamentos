// 1)Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//polindromo são palavras que podem ser lidas de traz para frente

// split() irá separar cada caractere de uma string e convertê-lo em um array.
// reverse() pegará aquele array e inverterá os elementos dentro dele.
// join() unirá os caracteres que foram revertidos pela função reverse().

// funcao de inverter - funcao auxiliar
// function invert(palavra){
// return palavra.split('').reverse().join('') 
// }
// funcao de verificar palindromo
// function palindromo(palavra){
//     const invertida = invert(palavra)     
//     if(palavra === invertida){
//         return 'true'   
//     }else{  
//         return 'false'
//     }
    
// }
// console.log(palindromo('David'))

// funcao de verificar palindromo
// function palindromo2(palavra){
//     const invertida = palavra.split('').reverse().join('')     
//     if(palavra === invertida){
//         return 'true'   
//     }else{  
//         return 'false'
//     }
    
// }
// console.log(palindromo2('David'))

// function palindromo3(palavra){
//     const invertida = palavra.split('').reverse().join('')     
//     return palavra === invertida
// }
// console.log(palindromo3('David'))
// console.log(palindromo3('arara'))

// function palindromo4(palavra){ 
//     return palavra === palavra.split('').reverse().join('') 
// }
// console.log(palindromo4('David'))
// console.log(palindromo4('arara'))

// for(let index = 0; index < palavra.length; index += 1){
//         return index
        
//     }
// for(let cont of invertida){
           
           
//}

// 2)Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

number = [2, 3, 6, 7, 10, 1]
for( let index in number){
    console.log(number[index])
}

function indiceMaiorValor(number){
    let maior = [0]
    for(let index in number){
        if(number[index] > maior[0]){
            maior = number
            return maior
        }
    }
}
indiceMaiorValor()