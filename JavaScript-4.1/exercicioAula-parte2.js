// let patientId = 50;
let patientId = `50`;
let isEnrolled = true;
const patientInfo = { 
  firstName: 'Ana',
  lastName: 'Santos',

};

const patientEmail = 'ana@email.com';
console.log(typeof patientId) //50 -number `50`-string 
console.log(typeof isEnrolled) //boolean
console.log(typeof patientInfo) //object
console.log(typeof patientEmail) //strimg
console.log(typeof patientAge) //undefined

//1)Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
const base = 5;
let height = 8;

//2)Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. 
//Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
const area = base * height;
console.log(area)

//3)Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const perimeter = 2 * (base + height)
console.log(perimeter)
