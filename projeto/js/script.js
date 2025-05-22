// script.js
function enviarPedido() {
  const input = document.getElementById("pedido-input");
  const resposta = document.getElementById("resposta-pedido");

  if (input.value.trim() !== "") {
    resposta.textContent = "Nossa... que item exótico, mas iremos conseguir relaxe, apenas espere um prazo de uma semana, depois iremos informar o tempo de envio 👌";
    resposta.style.display = "block";
    input.value = "";
  } else {
    resposta.textContent = "Por favor, escreva o que deseja.";
    resposta.style.display = "block";
  }
}