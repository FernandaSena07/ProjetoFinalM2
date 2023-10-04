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
  // Selecionar o botão "Limpar" pelo ID.
  const btnLimpar = document.getElementById('btnLimpar');

  // Adicionar um ouvinte de evento de clique ao botão "Limpar".
  btnLimpar.addEventListener('click', function () {
    // Selecionar os campos de texto e o campo de textarea pelo nome dos elementos.
    const nomeInput = document.querySelector('input[name="username"]');
    const emailInput = document.querySelector('input[name="email"]');
    const telefoneInput = document.querySelector('input[name="phone"]');
    const mensagemTextarea = document.querySelector('textarea[name="message"]');

    // Limpar os valores dos campos definindo-os como uma string vazia.
    nomeInput.value = "";
    emailInput.value = "";
    telefoneInput.value = "";
    mensagemTextarea.value = "";
  });
});

