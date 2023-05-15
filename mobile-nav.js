const cancel = document.getElementById('cancel');
const links = document.querySelectorAll('.link');
const hamburger = document.getElementById('hamburger');

links.forEach((links) => {
  links.addEventListener('click', () => {
    const x = document.getElementById('nav');
    x.style.display = 'none';
  });
});

cancel.addEventListener('click', () => {
  const x = document.getElementById('nav');
  x.style.display = 'none';
});

hamburger.addEventListener('click', () => {
  const x = document.getElementById('nav');
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
});