// Language toggle
function toggleLang() {
  window.currentLang = window.currentLang === 'en' ? 'zh' : 'en';
  applyLang(window.currentLang);
  document.querySelector('.lang-toggle').textContent = window.currentLang === 'en' ? '中文' : 'EN';
  document.body.classList.toggle('zh', window.currentLang === 'zh');
  document.documentElement.lang = window.currentLang;
}

// Apply default language on load
applyLang(window.currentLang);
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.lang-toggle').textContent = 'EN';
  document.body.classList.add('zh');
  document.documentElement.lang = 'zh';
});

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(255,255,255,0.1)'
    : 'rgba(255,255,255,0.06)';
});
