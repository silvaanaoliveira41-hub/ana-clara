function calcularTarifa() {
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  if (!checkin || !checkout) {
    alert("Preencha as datas de entrada e saída!");
    return;
  }

  let dataEntrada = new Date(checkin);
  let dataSaida = new Date(checkout);

  if (dataSaida <= dataEntrada) {
    alert("A saída deve ser depois da entrada!");
    return;
  }

  // Diferença em milissegundos
  let diferencaMs = dataSaida - dataEntrada;

  // Converter para horas
  let horas = diferencaMs / (1000 * 60 * 60);

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

  // Carro grande
  if (carroGrande) {
    valor *= 1.25;
  }

  // Cliente frequente
  if (clienteFrequente) {
    valor *= 0.95;
  }

  document.getElementById("resultado").innerText =
    `Tempo: ${horas.toFixed(2)} horas\nValor: R$ ${valor.toFixed(2).replace('.', ',')}`;
}