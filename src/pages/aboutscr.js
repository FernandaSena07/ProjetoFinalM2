document.addEventListener('DOMContentLoaded', function () {
   
    const enviarButton = document.querySelector('input[type="button"]');
  
   
    enviarButton.addEventListener('click', function () {
      
      const email = document.querySelector('input[name="email"]').value;
  
      
      if (email.trim() !== '') {
   
        window.alert('Email enviado com sucesso!');
      } else {
        
        window.alert('Por favor, digite seu email antes de enviar.');
      }
    });
  });
  