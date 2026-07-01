/* 1. SELEÇÃO DE ELEMENTOS */
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

/* 2. LOGICA DE ALTERNAR TEMA */
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-mode');
});