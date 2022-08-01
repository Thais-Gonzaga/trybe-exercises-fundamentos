
// console.log(localStorage.length); // retorna o que foi salvo, nesse caso zero
// localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
// localStorage.setItem('lastname', 'Smith');
// console.log(localStorage.getItem('lastname')); // retorna o valor 
// console.log(localStorage.length); //retorna 2 entradas salva
// localStorage.removeItem('lastname') // remove o item smith
// console.log(localStorage.length); //como removemos, vai ter uma entrada
// localStorage.clear(); // limpa todas as entradas salvas em localStorage
// console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

// sessionStorage - salva os dados apenas para a sessão atual. 
// Os dados são removidos assim que a pessoa fecha a aba (tab) ou o navegador (browser).
// console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
// sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
// sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
// console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
// console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
// sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
// console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
// sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
// console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0

// Existem duas funções que irão nos ajudar a armazenar qualquer tipo de dado: 
// uma vai transformar o dado em uma string JSON.stringify() e a 
// outra vai transformar o dado de volta para o formato original JSON.parse().

const myObj = {
    name: 'Link',
    age: 20,
  };

localStorage.setItem('myData', JSON.stringify(myObj));
// Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
const recoveredObject = JSON.parse(localStorage.getItem('myData'));
console.log(recoveredObject); // { name: 'Link', age: 20 }

let organization = {
    name: 'trybe',
    since: 2019,
  };
  
  // A variável 'storage' pode ser localStorage ou sessionStorage
  let storage = localStorage;
  
  storage.setItem('escola', JSON.stringify(organization));
  let org = JSON.parse(storage.getItem('escola'));
  console.log(org); // { name: 'trybe', since: 2019 }
  
  let classes = ['2019/set', '2019/oct'];
  storage.setItem('turmas', JSON.stringify(classes));
  let cls = JSON.parse(storage.getItem('turmas'));
  console.log(cls); // ['2019/set', '2019/oct']
