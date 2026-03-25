document.addEventListener('DOMContentLoaded', () => {
    // Dynamically set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
