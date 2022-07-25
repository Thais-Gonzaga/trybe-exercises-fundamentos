// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
let resultado = '';
let nota = 5;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. 
// Como default, imprima a mensagem de 'não se aplica'.
switch(nota){
    
    case nota > 7:
    case nota = 7:
    resultado = 'aprovada'
    break;

    case nota < 6:
    resultado = 'reprovada'
    break;

    // case nota > 6:
    // case nota = 6:
    // case nota < 7:
    // resultado = 'lista'
    // break;
}
console.log(resultado)