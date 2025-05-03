document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.login-container');
    setTimeout(() => {
      container.classList.add('animate');
    }, 100); // pequeno delay para a animação ocorrer suavemente
  });
  
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
  
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Simulando login
    console.log('Email:', email);
    console.log('Senha:', senha);
  
    // Redirecionamento após "login"
    setTimeout(() => {
      window.location.href = '../../pagina-inicial/index.html';
    }, 500); // tempo para permitir feedback antes do redirecionamento
  });