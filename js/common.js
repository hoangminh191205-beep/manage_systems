// Shared helpers: dropdown menu and login state
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function getUser() {
  try { return localStorage.getItem('ms_user') || sessionStorage.getItem('ms_user'); }
  catch (e) { return null; }
}
function setUser(email, remember) {
  try { (remember ? localStorage : sessionStorage).setItem('ms_user', email); } catch (e) {}
}
function logout() {
  try { localStorage.removeItem('ms_user'); sessionStorage.removeItem('ms_user'); } catch (e) {}
}

// Dropdown menu
function menu(open) {
  $('#menu').classList.toggle('open', open);
  $('#ddb').setAttribute('aria-expanded', open);
}
$('#ddb').addEventListener('click', e => {
  e.stopPropagation();
  menu(!$('#menu').classList.contains('open'));
});
document.addEventListener('click', () => menu(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') menu(false); });

// Login / Log out link
const navAuth = $('#navauth');
if (getUser()) {
  navAuth.textContent = 'Log out';
  navAuth.addEventListener('click', e => {
    e.preventDefault();
    logout();
    location.href = 'index.html';
  });
}
