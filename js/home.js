// Courses page: requires login
const user = getUser();
if (!user) location.replace('login.html');
else $('#who').textContent = 'Signed in as ' + user + '. Learn web development with our courses.';

const courses = [
  ['HTML', '#d9531e', '#fdeee6',
   'Learn how to create the structure of web pages using headings, paragraphs, images, and links',
   'HTML stands for HyperText Markup Language. It creates the structure of a web page using headings, paragraphs, images, and links.'],
  ['CSS', '#2b7bd6', '#e7f1fe',
   'Learn how to style web pages with colors, fonts, spacing, and attractive layouts.',
   'CSS controls how a page looks: colors, fonts, spacing, and layout across screen sizes.'],
  ['Bootstrap', '#7a3fb0', '#efe6fb',
   "Build responsive websites quickly using Bootstrap's grid system and components.",
   'Bootstrap is a front-end framework. It provides ready-made components and a responsive grid system to build websites quickly.'],
  ['JavaScript', '#a67c00', '#fdf6cc',
   'Make web pages interactive with button clicks, form validation, and dynamic content',
   'JavaScript adds behavior to a page: reacting to clicks, validating forms, and updating content without reloading.']
];

$('#cg').innerHTML = courses.map((c, i) =>
  `<div class="c" style="--a:${c[1]};--b:${c[2]}"><h3>${c[0]}</h3><p>${c[3]}</p><button data-i="${i}">Learn More</button></div>`
).join('');

// Course Details modal
let lastFocus;
function openModal(i) {
  lastFocus = document.activeElement;
  $('#mt').textContent = courses[i][0];
  $('#mp').textContent = courses[i][4];
  $('#ov').classList.add('open');
  $('#mc').focus();
}
function closeModal() {
  $('#ov').classList.remove('open');
  if (lastFocus) lastFocus.focus();
}
$('#cg').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (b) openModal(b.dataset.i);
});
$('#mc').addEventListener('click', closeModal);
$('#mx').addEventListener('click', closeModal);
$('#ov').addEventListener('click', e => { if (e.target.id === 'ov') closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
