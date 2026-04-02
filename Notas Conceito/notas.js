document.getElementById("formNOTAS").addEventListener("submit", function(e) {
    e.preventDefault();

    let N = document.getElementById("inputN").value;
    let A = document.getElementById("inputA").value;
    let Nota1 = parseFloat(document.getElementById("input1").value);
    let Nota2 = parseFloat(document.getElementById("input2").value);
    let Nota3 = parseFloat(document.getElementById("input3").value);
    let Nota4 = parseFloat(document.getElementById("input4").value);
    let ME = parseFloat(document.getElementById("inputE").value);

    // Cálculo da média de aproveitamento
    let MA = (Nota1 + Nota2 * 2 + Nota3 * 3 + Nota4 * 4 + ME) / 11;

    let conceito = "";
    let situacao = "";

    if (MA < 4.0) {
        conceito = "E";
    } else if (MA < 6.0) {
        conceito = "D";
    } else if (MA < 7.5) {
        conceito = "C";
    } else if (MA < 9.0) {
        conceito = "B";
    } else {
        conceito = "A";
    }

    if (conceito === "A" || conceito === "B" || conceito === "C") {
        situacao = "APROVADO";
    } else {
        situacao = "REPROVADO";
    }

    document.getElementById("resultado").innerHTML = `
        <strong>Número:</strong> ${N} <br>
        <strong>Nome:</strong> ${A} <br>
        <strong>Notas:</strong> ${Nota1}, ${Nota2}, ${Nota3}, ${Nota4} <br>
        <strong>Média Exercícios:</strong> ${ME} <br>
        <strong>Média de Aproveitamento:</strong> ${MA.toFixed(2)} <br>
        <strong>Conceito:</strong> ${conceito} <br>
        <strong>Situação:</strong> ${situacao}
    `;
});