document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    for (let i = 0; i < 5; i++) {
        const buddy = document.createElement('div');
        buddy.className = 'buddy';
        buddy.textContent = '😀';
        buddy.style.animationDelay = `${2 + i * 0.3}s`;
        hero.appendChild(buddy);
    }
});
