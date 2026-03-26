const form = document.getElementById("formIMC");
const resultado = document.getElementById("resultado");
const classificacao = document.getElementById("classificacao");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(event) {
    event.preventDefault();


    erro.style.display = "none";
    erro.textContent = "";

    const peso = parseFloat(document.getElementById("inputP").value);
    const altura = parseFloat(document.getElementById("inputA").value);


    if (!peso || !altura || peso <= 0 || altura <= 0) {
        erro.textContent = "Por favor, preencha os campos corretamente!";
        erro.style.display = "block";
        return;
    }

    const imc = peso / (altura * altura);
    resultado.textContent = `Seu IMC e: ${imc.toFixed(2)}`;

    let textoClassificacao = "";

    if (imc < 18.5) {
        textoClassificacao = "Abaixo do peso";
    } else if (imc < 25) {
        textoClassificacao = "Peso normal";
    } else if (imc < 30) {
        textoClassificacao = "Sobrepeso";
    } else if (imc < 35) {
        textoClassificacao = "Obesidade grau I";
    } else if (imc < 40) {
        textoClassificacao = "Obesidade grau II";
    } else {
        textoClassificacao = "Obesidade grau III";
    }

    classificacao.textContent = `Classificacao: ${textoClassificacao}`;

    destacarTabela(textoClassificacao);
 });

function destacarTabela(classificacaoUsuario) {
    const linhas = document.querySelectorAll("table tr");

    linhas.forEach(linha => {
        linha.classList.remove("destaque");

        if (linha.textContent.includes(classificacaoUsuario)) {
            linha.classList.add("destaque");
        }
    });
}