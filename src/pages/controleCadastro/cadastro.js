function Cadastro() {
  var usuario = document.getElementById('username').value;
  var senha = document.getElementById('senha').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (senha !== confirmPassword) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
  } else {
    localStorage.setItem('username', usuario);
    localStorage.setItem('password', senha);

    alert("Cadastro realizado com sucesso!");

    window.location = "../login/login.html";
  }
}

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  Cadastro();
});
