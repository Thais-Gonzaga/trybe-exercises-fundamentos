
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Ele esta com uma class tech transform: translateY(-20px); Ou seja, se desloca -20px no eixo y

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
  
  function addClassTech(event) {
    const tech = document.querySelector('.tech');
    tech.classList.remove('tech');
    event.target.classList.add('tech');
  }
  firstLi.addEventListener('click', addClassTech);
  secondLi.addEventListener('click', addClassTech);
  thirdLi.addEventListener('click', addClassTech);

  //outra forma
  //  const ul = document.querySelectorAll('.container')[0];
  //  ul.addEventListener('click', addClassTech)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
  function chargeText (event){
    const tech = document.querySelector('.tech');
    tech.innerText = event.target.value;    
  }
  input.addEventListener('input', chargeText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
// A window.location.href - propriedade retorna a URL da página atual.
  function redirect(){
    window.location.href = 'https://github.com/Thais-Gonzaga'
  }
  myWebpage.addEventListener('dblclick', redirect)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
  // function changeColor(event) {
  //   myWebpage.style.color ='#0fff';
  // }
  // myWebpage.addEventListener('mouseover', changeColor);

// se quiser mudar para outras cores?
//Math.round - arredondar
// Math.random -sorteio de 0 a 1, não incluindo 1..para deixa-lo inteiro..arrendamos com round
function color(){
  return `#${Math.round((Math.random()*16)).toString(16)}${Math.round((Math.random()*16)).toString(16)}${Math.round((Math.random()*16)).toString(16)}`
}

function changeColor2(event) {
  myWebpage.style.color = color()
  console.log(color())
}
myWebpage.addEventListener('mouseover', changeColor2)



  // Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.