let pontosA = 0;
    let pontosB = 0;

    function alterarPontuacao(time, valor) {
      if (time === 'A') {
        pontosA = Math.max(0, pontosA + valor);
        document.getElementById('pontosA').textContent = pontosA;
      } else {
        pontosB = Math.max(0, pontosB + valor);
        document.getElementById('pontosB').textContent = pontosB;
      }
    }

    function resetar() {
      pontosA = 0;
      pontosB = 0;
      document.getElementById('pontosA').textContent = 0;
      document.getElementById('pontosB').textContent = 0;
    }

    