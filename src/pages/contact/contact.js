document.addEventListener('DOMContentLoaded', function () {
  
  const btnEnviar = document.getElementById('btnEnviar');

  
  btnEnviar.addEventListener('click', function () {
   
    const nome = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefone = document.querySelector('input[name="phone"]').value;
    const mensagem = document.querySelector('textarea[name="message"]').value;

  
    const dadosDoFormulario = {
      Nome: nome,
      Email: email,
      Telefone: telefone,
      Mensagem: mensagem,
    };

   
    console.log(dadosDoFormulario);
  });
});
document.addEventListener('DOMContentLoaded', function () {
 
  const btnLimpar = document.getElementById('btnLimpar');

 
  btnLimpar.addEventListener('click', function () {
   
    const nomeInput = document.querySelector('input[name="username"]');
    const emailInput = document.querySelector('input[name="email"]');
    const telefoneInput = document.querySelector('input[name="phone"]');
    const mensagemTextarea = document.querySelector('textarea[name="message"]');

   
    nomeInput.value = "";
    emailInput.value = "";
    telefoneInput.value = "";
    mensagemTextarea.value = "";
  });
});


const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

function checkusername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "É necessario colocar um nome")
    } else {
        const formItem = username.parentElement;
        formItem.className = "container-form"
    }


}

function checkEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "É necessario preencher o email")
    } else {
        const formItem = email.parentElement;
        formItem.className = "container-form"
    }
}

function checkSenha() {
    const senhaValue = senha.value;

    if (senhaValue === "") {
        errorInput(senha, "É necessario colocar uma senha")
    } else {
        const formItem = senha.parentElement;
        formItem.className = "container-form"
    }

}


function checkForm() {
    checkusername();
    checkEmail();
    checkSenha();




