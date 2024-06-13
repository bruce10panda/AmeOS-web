const animateElements = (selector, animationClass) => {
    const elements = document.querySelectorAll(selector);
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          // Optionally remove hidden class for images
          if (entry.target.querySelectorAll('img').length > 0) {
            entry.target.querySelectorAll('img').forEach(img => img.classList.remove('hidden-image'));
          }
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(element => observer.observe(element));
  };
  
  animateElements('.landing2', 'animate__fadeInUp');
  animateElements('.landing3', 'animate__fadeInUp');
  animateElements('.panaminta', 'animate__fadeInUp');
  animateElements('.card', 'animate__fadeIn');
  animateElements('.card2', 'animate__fadeIn');