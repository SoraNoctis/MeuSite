function updateGradient(hour) {
    const hour = new Date().getHours();
    let color1, color2;

    if(hour >= 5 && hour < 12) {
        color1  = "#FDB813";
        color2 = "#4ecdc4";
    } else if (hour >= 12 && hour < 18) {
        color1 = '#FF6B6B';
        color2 = '#4ECDC4';
    } else if (hour >= 18 && hour < 22) {
        color1 = '#8A2BE2';
        color2 = '#FF69B4';
    } else {
        color1 = '#191970';
        color2 = '#000080';
    }

    document.getElementById('background').style.background = `linear-gradient(45deg, ${color1}, ${color2})`;

    setInterval(updateGradient, 30000);
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelectorAll('.nav-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('hidden');
            }
        });
        item.classList.add('focused');
    });

    item.addEventListener('mouseleave', () => {
        document.querySelectorAll('.nav-item').forEach(otherItem => {
            otherItem.classList.remove('hidden');
        });
        item.classList.remove('focused');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        } else if (e.deltaY < 0 && currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    });

    // Adicionar indicador de scroll
    const scrollIndicator = document.createElement('div');
    scrollIndicator.classList.add('scroll-indicator');
    scrollIndicator.innerHTML = '&#9660;'; // Seta para baixo
    document.body.appendChild(scrollIndicator);

    // Mostrar/esconder indicador de scroll
    function updateScrollIndicator() {
        if (currentSection < sections.length - 1) {
            scrollIndicator.style.opacity = '1';
        } else {
            scrollIndicator.style.opacity = '0';
        }
    }

    updateScrollIndicator();
    window.addEventListener('wheel', updateScrollIndicator);
});