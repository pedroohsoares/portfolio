// Navegação responsiva (menu hamburguer)
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Rolagem suave para navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('active');
    }
  });
});

// Animação de fade-in ao rolar
function onScrollFadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('DOMContentLoaded', onScrollFadeIn);
// Alternância do tema claro/escuro com armazenamento da preferência
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Checa preferência salva
if(localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
  toggleBtn.textContent = '☀️';
}
