// Example JavaScript code for button actions
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`Navigating to: ${link.textContent.trim()}`);
        window.open(link.href, '_blank');
    });
});
