
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
}


const phrases = ['Developer'];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = phrases[pi];

  if (!deleting) {
    typedEl.textContent = current.slice(0, ++ci);

    if (ci === current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --ci);

    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? 50 : 90);
}

type();


const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) {
      current = s.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.style.color =
      a.getAttribute('href') === `#${current}`
        ? 'var(--accent)'
        : '';
  });
});
