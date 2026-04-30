function chapelSeletor() {
    const casas = ["grifinoria", "sonserina", "corvinal", "lufalufa"];
    const sorte = casas[Math.floor(Math.random() * casas.length)];

    document.getElementById("casa").value = sorte;

    alert("🎩 Você foi para: " + sorte.toUpperCase());
}

function login() {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("senha").value;
    const casa = document.getElementById("casa").value;

    if (user === "admin" && pass === "1234" && casa !== "") {
        localStorage.setItem("casa", casa);
        window.location.href = "menu.html";
    } else {
        document.getElementById("erro").style.display = "block";
    }
}

function logout() {
    localStorage.removeItem("casa");
    window.location.href = "login.html";
}

window.onload = function () {
    const casa = localStorage.getItem("casa");

    if (!casa) return;

    const dados = {
        grifinoria: {
            nome: "Grifinória",
            img: "https://i.imgur.com/3ZQ3Z9R.jpg",
            brasao: "https://i.imgur.com/7QKQ8Qp.png",
            frase: "Coragem e determinação!",
            info: "Coragem, bravura e determinação."
        },
        sonserina: {
            nome: "Sonserina",
            img: "",
            brasao: "https://i.imgur.com/2dQ0XkZ.png",
            frase: "Ambição e poder!",
            info: "Ambição, astúcia e liderança."
        },
        corvinal: {
            nome: "Corvinal",
            img: "https://i.imgur.com/Nz6bXbK.jpg",
            brasao: "https://i.imgur.com/9QxQ9kL.png",
            frase: "Inteligência acima de tudo!",
            info: " Inteligência, sabedoria e criatividad."
        },
        lufalufa: {
            nome: "Lufa-Lufa",
            img: "https://i.imgur.com/8QZ7ZkR.jpg",
            brasao: "https://i.imgur.com/5QkQ2pM.png",
            frase: "Lealdade e amizade!",
            info: "Lealdade, paciência e trabalho árduo."
        }
    };

    const c = dados[casa];

    if (c) {
        document.getElementById("titulo").innerText = c.nome;
        document.getElementById("frase").innerText = c.frase;
        document.getElementById("info").innerText = c.info;
        document.getElementById("img").src = c.img;
        document.getElementById("brasao").src = c.brasao;
    }
};