document.addEventListener('DOMContentLoaded', () => {
    const landing2 = document.querySelector('.landing2');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                landing2.classList.add('animate__fadeInUp');
                images.forEach(img => img.classList.remove('hidden-image'));
            }
        });
    }, { threshold: 0.1 });

    observer.observe(landing2);
});

document.addEventListener('DOMContentLoaded', () => {
    const landing2 = document.querySelector('.landing3');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                landing2.classList.add('animate__fadeInUp');
                images.forEach(img => img.classList.remove('hidden-image'));
            }
        });
    }, { threshold: 0.1 });

    observer.observe(landing2);
});

document.addEventListener('DOMContentLoaded', () => {
    const panaminta = document.querySelector('.panaminta');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                panaminta.classList.add('animate__fadeInUp');
                images.forEach(img => img.classList.remove('hidden-image'));
            }
        });
    }, { threshold: 0.1 });

    observer.observe(panaminta);
});

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('animate__fadeIn');
                images.forEach(img => img.classList.remove('hidden-image'));
            }
        });
    }, { threshold: 0.1 });

    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
    const card2 = document.querySelector('.card2');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card2.classList.add('animate__fadeIn');
                images.forEach(img => img.classList.remove('hidden-image'));
            }
        });
    }, { threshold: 0.1 });

    observer.observe(card2);
});