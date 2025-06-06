// Garante que a página carregue no topo
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function() {

    // --- EFEITO DE DIGITAÇÃO ---
    const subtitleElement = document.getElementById('subtitle');
    if (subtitleElement) {
        const titles = ["Técnico em Marketing", "Graduando em Sistemas de Informação", "Apaixonado por Design & Código"];
        let titleIndex = 0;
        let charIndex = 0;

        function type() { if (charIndex < titles[titleIndex].length) { subtitleElement.textContent += titles[titleIndex].charAt(charIndex++); setTimeout(type, 100); } else { setTimeout(erase, 2000); } }
        function erase() { if (charIndex > 0) { subtitleElement.textContent = titles[titleIndex].substring(0, --charIndex); setTimeout(erase, 50); } else { titleIndex = (titleIndex + 1) % titles.length; setTimeout(type, 500); } }
        
        subtitleElement.textContent = '';
        type();
    }


    // --- ANIMAÇÃO DE REVEAL ON SCROLL ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));


    // --- BOTÃO VOLTAR AO TOPO ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if(scrollToTopBtn){
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
    }


    // --- LÓGICA DO MENU HAMBÚRGUER (VERSÃO MAIS SEGURA) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-links li a');

    // Só executa o código se os elementos essenciais do menu existirem no HTML
    if (hamburger && navLinks) {
        // Evento para abrir/fechar o menu ao clicar no hambúrguer
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-active');
        });

        // Evento para fechar o menu quando um dos links for clicado
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-active');
            });
        });
    }

});