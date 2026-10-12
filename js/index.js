// Hero carousel
const slides = $$('.slide');
$('.dots').innerHTML = slides.map((_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join('');
const dots = $$('.dots button');
let current = 0, timer;

function show(i) {
  current = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle('on', k === current));
  dots.forEach((d, k) => d.classList.toggle('on', k === current));
  clearInterval(timer);
  timer = setInterval(() => show(current + 1), 5500);
}
$('.prev').addEventListener('click', () => show(current - 1));
$('.next').addEventListener('click', () => show(current + 1));
dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
show(0);
