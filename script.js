
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Verifica si hay un tema guardado en localStorage
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggleBtn.textContent = '🌞'; // Cambia el icono a sol
  } else {
    body.classList.remove('light-mode');
    themeToggleBtn.textContent = '🌙'; // Mantén el icono de luna
  }
  
  themeToggleBtn.addEventListener('click', () => {
    // Alternar clase light-mode
    body.classList.toggle('light-mode');
  
    // Guardar el tema actual en localStorage
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeToggleBtn.textContent = '🌞'; // Cambia el icono a sol
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.textContent = '🌙'; // Cambia el icono a luna
    }
  });
  