const form = document.getElementById('contact-form');
form.addEventListener('click', (event) => {
  const email = document.getElementByClass('email').value;
  const checkString = email.toLowerCase();
  const errorDiv = document.getElementById('errordiv');
  if (!(checkString === email)) {
    const errorShow = document.createElement('p');
    errorShow.textContent = 'Form not submitted, email should be in lowercase.';
    errorShow.className = 'error-text';
    errorDiv.appendChild(errorShow);
    event.preventDefault();
    return false;
  }

  errorDiv.remove();
  return true;
});
