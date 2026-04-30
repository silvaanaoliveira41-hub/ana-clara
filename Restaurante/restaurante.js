
function calcularTotal() {
  let total = 0;

  let linhas = document.querySelectorAll("tbody tr");

  linhas.forEach(linha => {
    let preco = parseFloat(linha.querySelector(".preco").innerText);
    let input = linha.querySelector("input");
    let quantidade = parseInt(input.value) || 0;

    if (quantidade < 0) {
      quantidade = 0;
      input.value = 0;
    }

    total += preco * quantidade;
  });

  document.getElementById("total").innerText =
    total.toFixed(2).replace('.', ',');
}

function validarNumero(input) {
  if (input.value < 0) {
    input.value = 0;
  }
}

function bloquearLetraE(event) {
  if (['e', 'E', '+', '-'].includes(event.key)) {
    event.preventDefault();
  }
}