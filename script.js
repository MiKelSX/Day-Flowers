// Crear orbes adicionales aleatoriamente
function createRandomOrbs() {
    const background = document.querySelector('.background-animation');
    
    for (let i = 0; i < 5; i++) {
        const size = Math.random() * 100 + 50;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        
        const colors = [
            ['#f06', '#60f'],
            ['#09f', '#0ff'],
            ['#9f6', '#ff6'],
            ['#f09', '#90f'],
            ['#0ff', '#f60']
        ];
        
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        const orb = document.createElement('div');
        orb.classList.add('orb');
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.top = `${top}%`;
        orb.style.left = `${left}%`;
        orb.style.background = `linear-gradient(45deg, ${colors[colorIndex][0]}, ${colors[colorIndex][1]})`;
        orb.style.animationDelay = `${delay}s`;
        
        background.appendChild(orb);
    }
}

// Efectos para botones
function setupButtons() {
    const buttons = document.querySelectorAll('.menu-button');
    const emojis = document.querySelectorAll('.emoji');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Efecto pulsación del emoji
            emojis[index].style.transform = 'scale(1.5)';
            setTimeout(() => {
                emojis[index].style.transform = 'scale(1)';
            }, 200);
            
            // Aquí puedes añadir la funcionalidad para cada 
        });
        
        button.addEventListener('mouseover', () => {
            // Efecto visual adicional - cambiar el color del borde
            const colors = ['#ff6b6b', '#48dbfb', '#1dd1a1'];
            button.style.borderColor = colors[index];
            button.style.boxShadow = `0 15px 30px ${colors[index]}33`;
        });
        
        button.addEventListener('mouseout', () => {
            button.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Animación adicional del gato
function setupCat() {
    const cat = document.querySelector('.cat');
    const speechBubble = document.querySelector('.speech-bubble');
    
    // Evento click para el gato
    cat.addEventListener('click', () => {
        // Efecto de salto cuando se hace clic
        cat.style.transform = 'translateY(-30px) scale(1.2)';
        speechBubble.textContent = '¡Miauuuuuu!';
        speechBubble.style.opacity = '1';
        speechBubble.style.transform = 'scale(1)';
        
        setTimeout(() => {
            cat.style.transform = '';
        }, 500);
    });
    
    // Mostrar mensaje ocasionalmente
    setInterval(() => {
        const messages = ['¡Miau!', '¿Jugamos?', '¡Hola!', 'Purr...', '¡Miauuu!'];
        speechBubble.textContent = messages[Math.floor(Math.random() * messages.length)];
        speechBubble.style.opacity = '1';
        speechBubble.style.transform = 'scale(1)';
        
        setTimeout(() => {
            speechBubble.style.opacity = '0';
            speechBubble.style.transform = 'scale(0)';
        }, 3000);
    }, 7000);
}

// Inicializar todo cuando se carga la página
window.addEventListener('load', () => {
    createRandomOrbs();
    setupButtons();
    setupCat();
});