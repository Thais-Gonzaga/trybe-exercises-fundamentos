// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';

// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. 
// Como default, imprima a mensagem de 'não se aplica'.
const aprov = 'aprovada'
const reprov = 'reprovada'
const list = 'lista'
let resultado = aprov;

switch(resultado){
   
    case aprov:
    console.log(aprov)
    break;
    
    case reprov:
    console.log(reprov)
    break;

    case list:
    console.log(list)
    break;

    default :
    console.log('não se aplica')
    break;


    
}

    