function chapelSeletor() {
    const casas = ["grifinoria", "sonserina", "corvinal", "lufalufa"];
    const frases = [
        "🎩 O Chapéu está pensando...",
        "🎩 Vejo coragem em você...",
        "🎩 Inteligência impressionante...",
        "🎩 Ambição poderosa detectada..."
    ];

    const sorte = casas[Math.floor(Math.random() * casas.length)];
    const frase = frases[Math.floor(Math.random() * frases.length)];

    document.getElementById("casa").value = sorte;
    alert(frase + "\nVocê foi selecionado para: " + sorte.toUpperCase());
}

function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const casa = document.getElementById("casa").value;
    const erro = document.getElementById("erro");

    if (usuario === "admin" && senha === "1234" && casa !== "") {
        localStorage.setItem("casa", casa);
        window.location.href = "menu.html";
    } else {
        erro.style.display = "block";
    }
}

function sair() {
    localStorage.removeItem("casa");
    window.location.href = "login.html";
}

window.onload = function () {
    const casa = localStorage.getItem("casa");
    if (!casa) return;

    const root = document.documentElement;

    const dados = {
        grifinoria: {
            nome: "Grifinória",
            cor: "#ae0001",
            fundo: "linear-gradient(135deg, #740001, #d3a625)",
            brasao: "https://i.imgur.com/7QKQ8Qp.png",
            img: "https://i.imgur.com/3ZQ3Z9R.jpg",
            frase: "🦁 Onde a coragem nasce.",
            descricao: "Casa dos bravos e determinados.",
            historia: "Fundada por Godric Gryffindor no século X.",
            membros: "Harry Potter, Hermione, Ron"
        },

        sonserina: {
            nome: "Sonserina",
            cor: "#1a472a",
            fundo: "linear-gradient(135deg, #0f3d1e, #5d5d5d)",
            brasao: "https://i.imgur.com/2dQ0XkZ.png",
            img: "https://i.imgur.com/1Q9Z1Zm.jpg",
            frase: "🐍 Ambição é poder.",
            descricao: "Casa dos astutos e estratégicos.",
            historia: "Fundada por Salazar Slytherin.",
            membros: "Snape, Draco, Voldemort"
        },

        corvinal: {
            nome: "Corvinal",
            cor: "#0e1a40",
            fundo: "linear-gradient(135deg, #222f5b, #946b2d)",
            brasao: "https://i.imgur.com/9QxQ9kL.png",
            img: "https://i.imgur.com/Nz6bXbK.jpg",
            frase: "🦅 A mente é magia.",
            descricao: "Casa da inteligência.",
            historia: "Fundada por Rowena Ravenclaw.",
            membros: "Luna Lovegood, Cho Chang"
        },

        lufalufa: {
            nome: "Lufa-Lufa",
            cor: "#ecb939",
            fundo: "linear-gradient(135deg, #f0c75e, #726255)",
            brasao: "https://i.imgur.com/5QkQ2pM.png",
            img: "https://i.imgur.com/8QZ7ZkR.jpg",
            frase: "🦡 Todos são bem-vindos.",
            descricao: "Casa da lealdade.",
            historia: "Fundada por Helga Hufflepuff.",
            membros: "Cedric Diggory, Tonks"
        }
    };

    const info = dados[casa];

    if (info) {
        root.style.setProperty("--cor-principal", info.cor);
        root.style.setProperty("--cor-fundo", info.fundo);

        document.getElementById("tituloCasa").innerText = info.nome;
        document.getElementById("frase").innerText = info.frase;
        document.getElementById("descricao").innerText = info.descricao;

        document.getElementById("brasao").src = info.brasao;
        document.getElementById("imagemCasa").src = info.img;

        document.getElementById("infoExtra").innerHTML = `
            <b>📖 História:</b> ${info.historia}<br><br>
            <b>⭐ Membros:</b> ${info.membros}
        `;
    }
};