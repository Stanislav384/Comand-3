// Простой скрипт для имитации клика по песне
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.t-main').innerText;
        alert('Сейчас заиграет: ' + title);
    });
});