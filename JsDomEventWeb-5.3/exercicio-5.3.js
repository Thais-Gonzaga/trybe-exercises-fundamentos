function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();
  
// 1)Crie um calendário dinamicamente.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function dinamicDays(array) {
  for (let index = 0; index < array.length; index += 1) {
    const arrayDay = array[index];
    const ul = document.getElementById('days');
    const li = document.createElement('li');
    li.innerText = arrayDay;
    li.className = 'day';
    
    if(arrayDay === 4 || arrayDay === 18) li.className = 'day friday';
    if(arrayDay === 24 ||  arrayDay === 31) li.className = 'day holiday';
    if(arrayDay === 25) li.className = 'day friday holiday';
    
    ul.appendChild(li);      
  }
}
dinamicDays(decemberDaysList);

// function treeClass(arrayDay) {
//   if(arrayDay === 25) return 'day friday holiday';
// }

// function friday(arrayDay) {
//   if(arrayDay === 4 || arrayDay === 18) return 'day friday';
// }

// function holiday(arrayDay) {
//   if(arrayDay === 24 ||  arrayDay === 31) return 'day holiday';
// }


// let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// function dinamicDays(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     const arrayDay = array[index];
//     const ul = document.getElementById('days');
//     const li = document.createElement('li');
//     li.innerText = arrayDay;
//     li.className = 'day';
//     li.className = friday(arrayDay)
//     li.className = holiday(arrayDay)
//     li.className = treeClass(arrayDay)
//     ul.appendChild(li);      
//   }
// };
// dinamicDays(decemberDaysList);

//2)Implemente uma função que crie dinamicamente um botão com o nome "Feriados"

function buttonHoliday(buttonName) {
  const [containerButtons] = document.getElementsByClassName('buttons-container');
  const newButton = document.createElement('button');
  newButton.innerHTML = buttonName;
  newButton.id = 'btn-holiday';
  containerButtons.appendChild(newButton);
}
buttonHoliday('Feriados');

// 3)Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
const [elementNewButton] = document.getElementsByTagName('button');

function color(){
  
}

function changeColor(event) {
  const classHoliday = document.getElementsByClassName('holiday');
  classHoliday.style.background = color()
}
 elementNewButton.addEventListener('click', changeColor);
