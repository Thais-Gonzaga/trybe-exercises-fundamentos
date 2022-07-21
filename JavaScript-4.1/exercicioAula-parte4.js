// 1)Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
const currentHour = 23;
// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
let message = ``;
// Implemente condicionais para que:

if(currentHour >= 22){// Se o horário for maior ou igual a 22, 
    message = "Não deveríamos comer nada, é hora de dormir" 
}else if(currentHour >= 18 && currentHour < 22){// Se o horário for maior ou igual a 18 e menor que 22,
    message = "Rango da noite, vamos jantar :D"
}else if(currentHour>= 14 && currentHour < 18){// Se o horário for maior ou igual a 14 e menor que 18
    message = "Vamos fazer um bolo pro café da tarde?"
}else if(currentHour >= 11 && currentHour < 14){// Se o horário estiver entre 11 e 14
    message = "Hora do almoço!!!"
}else{// Se o horário estiver entre 4 e 11,
    message = "Hmmm, cheiro de café recém passado"
}
// Agora imprima a variável message fora das suas condições.
console.log(message)

// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
let weekDay = 'quarta-feira';
// Implemente condicionais para que:
if(weekDay == 'sábado' || weekDay == 'domigo'){
    console.log("FINALMENTE, descanso merecido UwU")
}else{
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}