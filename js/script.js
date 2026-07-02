// 1. SELEÇÃO DE ELEMENTOS 
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// 2. VERIFICAR SE USER TINHA UMA PREFERÊNCIA SALVA 
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    bodyElement.classList.add('light-mode');
}

// 3. ESCUTA EVENTOS PARA CLICK DO BOTÂO
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-mode');
    
    if (bodyElement.classList.contains('light-mode')) {
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        localStorage.setItem('portfolio-theme', 'dark');
    }
});