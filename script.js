document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

document.getElementById('learn-more').addEventListener('click', function() {
    var hiddenSection = document.getElementById('hidden-section');
    hiddenSection.style.display = hiddenSection.style.display === 'none' ? 'block' : 'none';
});
