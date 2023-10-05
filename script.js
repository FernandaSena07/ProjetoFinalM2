document.addEventListener('DOMContentLoaded', function () {
    // Selecionar o botão "Enviar" pelo nome do elemento.
    const enviarButton = document.querySelector('input[type="button"]');
  
    // Adicionar um ouvinte de evento de clique ao botão "Enviar".
    enviarButton.addEventListener('click', function () {
      // Obter o valor do campo de entrada de email.
      const email = document.querySelector('input[name="email"]').value;
  
      // Verificar se o campo de email não está vazio.
      if (email.trim() !== '') {
        // Mostrar um alerta informando que o email foi enviado.
        window.alert('Email enviado com sucesso!');
      } else {
        // Mostrar um alerta se o campo de email estiver vazio.
        window.alert('Por favor, digite seu email antes de enviar.');
      }
    });
  });
  