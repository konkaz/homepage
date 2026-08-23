(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('site-lang');
  const initial = saved === 'en' ? 'en' : 'ja';

  function setLang(lang) {
    const next = lang === 'en' ? 'en' : 'ja';
    root.dataset.lang = next;
    root.lang = next;
    localStorage.setItem('site-lang', next);

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
      const active = button.dataset.langSwitch === next;
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
      button.classList.toggle('active', active);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
      button.addEventListener('click', () => setLang(button.dataset.langSwitch));
    });
    setLang(initial);
  });
})();
