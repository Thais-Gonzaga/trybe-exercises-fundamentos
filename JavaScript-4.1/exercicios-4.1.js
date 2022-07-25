// 1)Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
// const a = 15;
// const b = 5;
// Faça programas para:
// console.log(a + b)// Adição (a + b)
// console.log(a - b)// Subtração (a - b)
// console.log(a * b)// Multiplicação (a * b)
// console.log(a / b)// Divisão (a / b)
// console.log(a % b)// Módulo (a % b)

// 2)Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes com os valores que serão comparados.
// let maior = '';
// const c = 2;
// const d = 5;

// if(c > d ) {
//     maior = c;
// }else{
//     maior = d;
// }
// console.log(maior)

// 3)Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três constantes com os valores que serão comparados.
// let maior = '';
// const c = 2;
// const d = 5;
// const e = 9;
// if(c > d && c > e ) {
//     maior = c;
// }else if( d > e && d > c ){
//     maior = d;
// }else{
//     maior = e;
// }
// console.log(maior)

// 4)Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, 
// "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

// 5)Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// const angulo1 = -20;
// const angulo2 = 50;
// const angulo3 = 100;
// let triangulo = angulo1 + angulo2 + angulo3

// if( angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
//     console.log(' erro')
// }else if(triangulo === 180){
//     console.log('true')
// }else if(triangulo !== 180){
//     console.log('false')
// }

// 6)Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// const peca = "Bispo".toLowerCase() ; // Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// switch(peca){

// case "peao":
// console.log("peão -> os peões se movem somente para frente, uma casa por vez");
// break;

// case "cavalo":
// console.log("cavalo -> O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.");
// break;

// case "bispo":
// console.log("bispo -> mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.");
// break;

// case "torre":
// console.log("torre -> se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas")
// break;

// case "rainha":
// console.log("rainha -> mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.")
// break;

// case "rei":
// console.log("rei -> pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.");
// break;
// }

// 7)Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 

// const nota = 40;
// if(nota < 0 || nota > 100){
//     console.log('erro!')
// }else if( nota >= 90){
//     console.log('A')
// }else if( nota >= 80){
//     console.log('B')
// }else if( nota >= 70){
//     console.log('C')
// }else if( nota >= 60){
//     console.log('D')
// }else if( nota >= 50){
//     console.log('E')
// }else if( nota < 50){
//     console.log('F')
// }

// 🚀 8)Escreva um programa que defina três números em constantes 
// e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
// const number1 = 5;
// const number2 = 3;
// const number3 = 7;

// if( number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0){
//     console.log('true')
// }else{
//     console.log('false')
// }

// 9) Escreva um programa que defina três números em constantes e 
// retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// // Bonus: use somente um if.
// const number1 = 6;
// const number2 = 4;
// const number3 = 2;
// if( number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0){
//     console.log('true')
// }else{
//     console.log('false')
// }

// 10)Escreva um programa que se inicie com dois valores em duas constantes diferentes: 
// o custo de um produto e seu valor de venda. 
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) 
// a empresa terá ao vender mil desses produtos.
// const custoProduto = 10;
// const custoTotal = custoProduto + (custoProduto*0.2) //incide um imposto de 20%.
// const custoVenda = 30;
// const lucro = custoVenda - custoTotal;
// const qtd = 1000;

// if(custoProduto < 0 || custoVenda < 0){
//     console.log("Erro! Digite um número positivo")
//  } else{

//     console.log(`A empresa terá ${lucro*qtd} ao vender mil produto`);
//  }

// Uma pessoa que trabalha de carteira assinada tem descontados de seu salário bruto o INSS e o IR. 
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
// Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. 

// const salarioBruto = 1000.00;
// let salarioBase =""

// //desconto do INSS
// if( salarioBruto <= 1556.94){
//     salarioBase = salarioBruto - salarioBruto*0.08
// } else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
//     salarioBase = salarioBruto - salarioBruto*0.09
// }else if(salarioBruto >= 2594.93 &&  salarioBruto <= 5189.82){
//     salarioBase = salarioBruto - salarioBruto*0.11
// }else if( salarioBruto > 189.82){
//     salarioBase = salarioBruto + 570.88
// }
// // desconto do IR
// let valorIR = ""
// if(salarioBase <= 1903.98){
//     console.log("isento de imposto de renda")
// } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
//     valorIR = salarioBase*0.075 - 142.80
// } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
//     valorIR = salarioBase*0.15 - 354.80
// } else if(salarioBase >= 3751.06 && salarioBase <= 4.664,68){
//     valorIR = salarioBase*0.225 - 636.13 
// } else if(salarioBase >= 4664.68){
//     valorIR = salarioBase*0.275 - 869.36
// }

// let salarioLiquido = salarioBase - valorIR
// console.log( salarioLiquido)


