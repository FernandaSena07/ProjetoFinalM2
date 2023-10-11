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


