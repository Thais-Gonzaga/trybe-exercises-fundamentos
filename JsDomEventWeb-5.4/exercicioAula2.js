const button = document.getElementById('add-button'); // acessou id do botao
const input = document.getElementById('phrases-input'); // acessou a caixa de input
const list = document.getElementById('phrases-list'); // acessou a lista ul

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases')); // recuperou phrases no formato original
  const listLength = phrasesList.length - 1; 
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};