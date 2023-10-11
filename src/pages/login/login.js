function Login() {
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;
  
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
  
    if (username === storedUsername && senha === storedPassword) {
      alert("Login bem-sucedido!");
    } else {
      alert("Dados incorretos, tente novamente.");
    }
  }
  
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    Login();
  });
  