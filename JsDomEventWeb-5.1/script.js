// acessar header
const header = document.querySelector('#header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.backgroundColor ='rgb(249, 219, 94)';
const noTitulo = document.querySelectorAll('.no-emergency-tasks h3');
for(let index = 0; index < noTitulo.length; index += 1){
noTitulo[index].style.backgroundColor = 'black';
}
const emergency = document.querySelector('.emergency-tasks');
emergency.style.backgroundColor ='rgb(255, 159, 132)';
const tituloEmer = document.querySelectorAll('.emergency-tasks h3');
for(let index = 0; index < tituloEmer.length; index += 1){
    tituloEmer[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'black';
