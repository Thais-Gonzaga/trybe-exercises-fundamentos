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
// console.log(allLessons);

//6)Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const studants = (obj) => {
  const nkey1 = obj.lesson1.numeroEstudantes;
  const nkey2 = obj.lesson2.numeroEstudantes;
  const nkey3 = obj.lesson3.numeroEstudantes;
  return Number(nkey1) + Number(nkey2) +Number(nkey3);
};
// console.log(studants(allLessons));

//7)Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const valuesIndex = (obj, index) => Object.values(obj)[index];
// console.log(valuesIndex(lesson1, 2));

//8)Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

// const verificKeyValue = (obj, key, value) => 

// console.log(verificKeyValue(lesson2, 'matéria', 'História'));
// ---------------------------------------------------------------------------
// BONUS
// 🚀 1)Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. 
// Use o objeto criado no exercício 5.
  const contMat = (obj) => {
    const array = Object.values(obj);
    let cont = 0
    for (let index = 0; index < array.length; index += 1) {
      if(array[index].materia === 'Matemática') {
       cont += Number(array[index].numeroEstudantes)   
      }
    }
    return cont
  }
  // console.log(contMat(allLessons));

// 🚀 2)Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, 
// as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
// console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

const getInf = (obj, teacher) => {
  const aulas = [];
  let cont = 0;
  const array = Object.values(obj);
  for(let index =0; index < array.length; index += 1){
   if (array[index].professor === teacher) {
    aulas.push(array[index].materia);
    cont += Number(array[index].numeroEstudantes);
   }
  }
  return {aulas: aulas, estudantes: cont};
}

const relatorio = (obj, teacher) => {
const rel = {};
rel.professor = teacher;
Object.assign(rel, getInf(obj, teacher));
return rel;
} 
console.log(relatorio(allLessons, 'Maria Clara'));