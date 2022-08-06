// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). 
const buttonEnviar = document.querySelector('#enviar');

buttonEnviar.addEventListener('click', function enviar(event) {
    event.preventDefault();
});