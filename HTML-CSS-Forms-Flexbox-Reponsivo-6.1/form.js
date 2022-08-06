// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). 
const buttonEnviar = document.querySelector('#enviar');

buttonEnviar.addEventListener('click', function enviar(event) {
  event.preventDefault();
});
//bonus
//Faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
function check(){
  const concordo = document.querySelector('#concordo');
  buttonEnviar.disabled = !concordo.check;
 }

