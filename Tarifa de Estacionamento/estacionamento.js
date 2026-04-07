function calcularTarifa() {
  let horas = parseFloat(document.getElementById("horas").value) || 0;
  let carroGrande = document.getElementById("carroGrande").checked;
  let clienteFrequente = document.getElementById("clienteFrequente").checked;

  let valor = 0;

  if (horas >= 24) {
    let dias = Math.floor(horas / 24);
    let horasRestantes = horas % 24;

    valor += dias * 60;

    if (horasRestantes > 0) {
      valor += 5;
      if (horasRestantes > 1) {
        valor += (horasRestantes - 1) * 2.5;
      }
    }
  } else {
    if (horas > 0) {
      valor += 5;
      if (horas > 1) {
        valor += (horas - 1) * 2.5;
      }
    }
  }

  // Adicional de carro grande
  if (carroGrande) {
    valor *= 1.25;
  }

  // Desconto cliente frequente
  if (clienteFrequente) {
    valor *= 0.95;
  }

  document.getElementById("resultado").innerText =
    "O valor total é R$ " + valor.toFixed(2).replace('.', ',');
}