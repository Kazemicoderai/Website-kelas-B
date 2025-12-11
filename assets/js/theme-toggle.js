function toggleDarkMode() {
    const body = document.body;
    const html = document.documentElement;
    body.classList.toggle('dark-mode');
    html.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark);
    document.querySelector('.toggle-theme').textContent = isDark ? '☀️' : '🌙';
}

window.onload = function() {
    const isDark = localStorage.getItem('dark-mode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
    }
    document.querySelector('.toggle-theme').textContent = isDark ? '☀️' : '🌙';
}
