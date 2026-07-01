/* ==========================================================================
   Tab-switching logic: shows/hides panels and updates the accent color
   and URL hash when a nav button is clicked.
   ========================================================================== */

const buttons = document.querySelectorAll('nav.tabs button');
  const panels  = document.querySelectorAll('section.panel');
  const accentMap = {
    general: 'var(--c-general)',
    publications: 'var(--c-pub)',
    talks: 'var(--c-talks)',
    teaching: 'var(--c-teach)',
    hobbies: 'var(--c-hobby)'
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      buttons.forEach(b => b.classList.toggle('active', b === btn));
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === tab));

      document.documentElement.style.setProperty('--accent', accentMap[tab]);
      history.replaceState(null, '', '#' + tab);
    });
  });

  // Open directly to a tab via URL hash, e.g. yoursite.com/#publications
  const initial = window.location.hash.replace('#', '');
  if (accentMap[initial]) {
    document.querySelector(`nav.tabs button[data-tab="${initial}"]`).click();
  }
