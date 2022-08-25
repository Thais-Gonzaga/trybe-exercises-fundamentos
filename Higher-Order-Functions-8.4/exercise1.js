const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
//   1 - Dada uma matriz, transforme em um array.
const flatten = (arrays) => arrays.reduce((acc, curr) => acc.concat(curr) );
console.log(flatten(arrays));
