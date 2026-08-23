(() => {
  const root = document.documentElement;
  const supported = ['ja', 'en', 'zh', 'th'];

  function normalize(lang) {
    return supported.includes(lang) ? lang : 'ja';
  }

  function setLang(lang) {
    const next = normalize(lang);
    root.dataset.lang = next;
    root.lang = next === 'zh' ? 'zh-Hant' : next;
    localStorage.setItem('site-lang', next);

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
      const active = button.dataset.langSwitch === next;
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
      button.classList.toggle('active', active);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    let saved = 'ja';
    try {
      saved = normalize(localStorage.getItem('site-lang'));
    } catch (e) {}

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
      button.addEventListener('click', () => setLang(button.dataset.langSwitch));
    });

    setLang(saved);
  });
})();
