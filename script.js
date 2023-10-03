
  document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioContato");
    
    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário

      // Obtenha os valores dos campos do formulário
      const nome = formulario.querySelector('input[name="username"]').value;
      const email = formulario.querySelector('input[name="email"]').value;
      const telefone = formulario.querySelector('input[name="phone"]').value;
      const mensagem = formulario.querySelector('textarea[name="message"]').value;

      // Valide os campos conforme necessário

      // Envie os dados para o servidor ou realize outras ações aqui

      // Exemplo: exibir os dados no console
      console.log("Nome: " + nome);
      console.log("Email: " + email);
      console.log("Telefone: " + telefone);
      console.log("Mensagem: " + mensagem);

      // Limpe o formulário após o envio (opcional)
      formulario.reset();
    });
  });

