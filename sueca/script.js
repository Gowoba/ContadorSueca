document.querySelectorAll('#cartas-container img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('selected');
    });
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.querySelectorAll('#cartas-container img').forEach(img => {
        img.classList.remove('selected'); // Remove a classe 'selected' de todas as imagens
    });
});