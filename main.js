/* W. le Comte — Shared JavaScript */

/* ── Burger menu ─────────────────────────────── */
const burger  = document.getElementById('burger');
const mobMenu = document.getElementById('mobMenu');

function openMob() {
  mobMenu.classList.add('open');
  burger.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMob() {
  mobMenu.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  mobMenu.classList.contains('open') ? closeMob() : openMob();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMob();
});

/* ── Fade-up observer ────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });

document.querySelectorAll('.fu').forEach(el => io.observe(el));

/* ── Footer email ────────────────────────────── */
const footerBtn   = document.querySelector('.footer-email-btn');
const footerInput = document.querySelector('.footer-email-input');

if (footerBtn && footerInput) {
  footerBtn.addEventListener('click', function () {
    const val = footerInput.value.trim();
    if (val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>';
      this.style.background   = 'var(--green)';
      this.style.borderColor  = 'var(--green)';
      footerInput.value = '';
    }
  });
}

/* ── Keyboard-accessible service cards ───────── */
document.querySelectorAll('.svc-card[role="link"]').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter') card.click();
  });
});
