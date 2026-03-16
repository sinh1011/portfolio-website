// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// PROGRESS BAR ANIMATION
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.progress-fill');
        fills.forEach(fill => {
          const width = fill.getAttribute('data-width');
          fill.style.width = width + '%';
        });
      }
    });
  },
  { threshold: 0.3 }
);

const progressSection = document.querySelector('.learning-section');
if (progressSection) progressObserver.observe(progressSection);

// HERO SCROLL BUTTON
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  heroScroll.style.cursor = 'pointer';
}
