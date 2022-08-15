const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//1)Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, 
// sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const turno = (obj, key, value) => obj[key] = value;
 turno(lesson2, 'turno', 'noite');
//  console.log(lesson2);

//2)Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keyObject = (obj) => Object.keys(obj);
// console.log(keyObject(lesson1));

//3)Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
const lengthObject = (obj) => Object.keys(obj).length;
// console.log(lengthObject(lesson3));

//4)Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valuesObject = (obj) => Object.values(obj);
// console.log(valuesObject(lesson2));

//5)Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: 
// lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons)

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);