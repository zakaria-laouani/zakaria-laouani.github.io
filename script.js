document.querySelector('#year').textContent = new Date().getFullYear();
const buttons = document.querySelectorAll('[data-filter]');
const groups = document.querySelectorAll('.project-group');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  groups.forEach(group => {
    group.hidden = button.dataset.filter !== 'all' && group.dataset.category !== button.dataset.filter;
    if (!group.hidden) count += group.querySelectorAll('.project-card').length;
  });
  document.querySelector('#project-count').textContent = count + (count > 1 ? ' projets affichés' : ' projet affiché');
}));
function openLinkedProject() {
  if (!location.hash) return;
  let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const card = document.getElementById(id);
  if (!card || !card.classList.contains('project-card')) return;
  const all = document.querySelector('[data-filter="all"]');
  if (all) all.click();
  const details = card.querySelector('details');
  if (details) details.open = true;
  card.scrollIntoView({block:'start'});
}
window.addEventListener('hashchange', openLinkedProject);
openLinkedProject();
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
