document.addEventListener('DOMContentLoaded', () => {
    // Dynamically set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            toggle.textContent = isOpen ? '✕' : '☰';
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.textContent = '☰';
            });
        });
    }
});
