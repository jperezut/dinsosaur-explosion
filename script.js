document.addEventListener('DOMContentLoaded', () => {
    const dinosaur = document.getElementById('dinosaur');
    
    setTimeout(() => {
        dinosaur.classList.add('explode');
    }, 500);
});
