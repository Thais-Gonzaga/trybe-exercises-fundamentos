
let counter = 0;

while(counter !== 5) {
  counter += 1;
  console.log(counter)
}
//utilizando break parar while
function testaBreak(x) {
    var i = 0;
 
    while (i < 6) {
       if (i == 3) {
          break;
       }
       i += 1;
    }
    return i * x;
 }