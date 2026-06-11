document.addEventListener("DOMContentLoaded", () => {
    const helpToggle = document.getElementById('helpToggle');
    const helpPanel  = document.getElementById('helpPanel');

    if (!helpToggle || !helpPanel) return; // Seguridad: si la página no tiene burbuja, no hace nada

    helpToggle.addEventListener('click', () => {
        const isOpen = helpPanel.classList.toggle('open');
        helpToggle.innerHTML = isOpen
            ? '<i class="bi bi-x-lg"></i>'
            : '<i class="bi bi-question-lg"></i>';
    });

    window.toggleAnswer = function(btn) {
        const answer = btn.nextElementSibling;
        const icon   = btn.querySelector('.bi-chevron-down, .bi-chevron-up');

        document.querySelectorAll('.help-answer.show').forEach(el => {
            if (el !== answer) {
                el.classList.remove('show');
                const prevIcon = el.previousElementSibling.querySelector('i:last-child');
                if (prevIcon) {
                    prevIcon.className = prevIcon.className.replace('bi-chevron-up','bi-chevron-down');
                }
            }
        });

        answer.classList.toggle('show');
        if (icon) {
            icon.className = icon.className.includes('bi-chevron-down')
                ? icon.className.replace('bi-chevron-down','bi-chevron-up')
                : icon.className.replace('bi-chevron-up','bi-chevron-down');
        }
    };

    document.addEventListener('click', (e) => {
        if (!helpPanel.contains(e.target) && !helpToggle.contains(e.target)) {
            helpPanel.classList.remove('open');
            helpToggle.innerHTML = '<i class="bi bi-question-lg"></i>';
        }
    });
});