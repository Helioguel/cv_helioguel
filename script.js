// Exemplo simples de animação ao rolar para a seção de habilidades
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('habilidades');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // Quando a seção de habilidades aparecer na tela, anima as barras de progresso
    if (skillsPosition < screenPosition) {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.transition = 'width 2s ease-in-out';
            bar.style.width = width; // Aplica o valor de width já configurado no HTML
        });
    }
});

