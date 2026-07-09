const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .wipe-wrap').forEach((element) => observer.observe(element));

document.querySelectorAll('.proj-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.proj-tab').forEach((button) => button.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.dataset.cat;

    document.querySelectorAll('.proj-card').forEach((card) => {
      if (card.dataset.cat === category) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        void card.offsetHeight;
        card.style.animation = 'fadeUp .5s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
