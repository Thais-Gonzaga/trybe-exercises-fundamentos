// 1)Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const nota = 50;

// 2)Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

if(nota >= 80){
// Se a nota for maior ou igual a 80, imprima 
    console.log("Parabéns, você foi aprovada(o)!");
}else if(nota<80 & nota>=60){
// Se a nota for menor que 80 e maior ou igual a 60, imprima 
    console.log("Você está na nossa lista de espera");
}else{
// Se a nota for menor que 60, imprima 
    console.log("Você foi reprovada(o)")
}
