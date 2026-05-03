let cadastro = false;
const senhaSalva = "1234";
const usuarioSalvo = "admin";

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";


    if (senhaSalva === senha && usuarioSalvo === usuario) {
        mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso!</p></div>";
        window.location.href = "public/home.html";
    } else {
        mensagem.innerHTML = "<div class='erro'><p>Dados incorretos!</p></div>";
    }
}

document.getElementById("form-login").reset();
