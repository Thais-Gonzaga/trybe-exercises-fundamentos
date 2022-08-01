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
    li.classList = 'day';
    li.innerText = arrayDay;
    
    if(arrayDay === 24 ||  arrayDay === 31) li.classList = 'day holiday';
    if(arrayDay === 4 || arrayDay === 18) li.classList = 'day friday';
    // if(arrayDay === 25) lis.classList = 'day friday holiday';
    
    ul.appendChild(li);      
  }
}
dinamicDays(decemberDaysList)
