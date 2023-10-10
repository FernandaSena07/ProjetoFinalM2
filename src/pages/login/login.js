function Login() {
    var done = 0;
    var usuario = document.getElementById('username').value;
    var senha = document.getElementById('senha').value;

    if (usuario === "admin" && senha === "admin") {
        window.location = "/p/admin.html";
        done = 1;
    }

    if (done === 0) {
        alert("Dados incorretos, tente novamente");
    }
}

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    Login(); // 
});
