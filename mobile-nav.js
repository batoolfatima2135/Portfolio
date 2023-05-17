const cancel = document.getElementById('cancel');
const links = document.querySelectorAll('.link');
const hamburger = document.getElementById('hamburger');
const body = document.getElementsByTagName('BODY')[0];
const nav = document.getElementById('nav');

links.forEach((links) => {
  links.addEventListener('click', () => {
    nav.style.display = 'none';
    hamburger.style.display = 'block';
    cancel.style.display = 'none';
    body.style.overflow = 'visible';
  });
});

cancel.addEventListener('click', () => {
  nav.style.display = 'none';
  hamburger.style.display = 'block';
  cancel.style.display = 'none';
  body.style.overflow = 'visible';
});

hamburger.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
  hamburger.style.display = 'none';
  cancel.style.display = 'block';
  body.style.overflow = 'hidden';
});
