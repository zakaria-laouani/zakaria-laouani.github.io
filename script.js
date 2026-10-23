// Ajouter ici votre URL LinkedIn complète, par exemple https://www.linkedin.com/in/votre-identifiant/
const LINKEDIN_URL = "https://www.linkedin.com/in/zakaria-laouani-aa63ab289/";
if (LINKEDIN_URL.startsWith('https://www.linkedin.com/in/')) {
  const link = document.querySelector('#linkedin-link');
  link.href = LINKEDIN_URL; link.hidden = false; link.target = '_blank'; link.rel = 'noopener noreferrer';
}
document.querySelector('#year').textContent = new Date().getFullYear();
const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count++;
  });
  document.querySelector('#project-count').textContent = count + (count > 1 ? ' projets affichés' : ' projet affiché');
}));
const dialog = document.querySelector('#image-dialog');
let opener;
document.querySelectorAll('[data-lightbox]').forEach(link => link.addEventListener('click', event => {
  if (typeof dialog.showModal !== 'function') return;
  event.preventDefault(); opener = link;
  const img = document.querySelector('#dialog-image');
  img.src = link.href; img.alt = link.querySelector('img').alt;
  document.querySelector('#dialog-caption').textContent = img.alt;
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { if (opener) opener.focus(); });
