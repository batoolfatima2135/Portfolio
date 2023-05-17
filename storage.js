function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException

        && (
          e.name === 'QuotaExceededError'

          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')

        && storage
        && storage.length !== 0
    );
  }
}
const contact = document.getElementById('contact-form');
contact.addEventListener('change', () => {
  const username = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;

  const data = {
    name: username,
    email,
    message: msg,
  };
  if (storageAvailable('localStorage')) {
    localStorage.setItem('data', JSON.stringify(data));
  }
});
const localStorageItem = localStorage.getItem('data');
const dataObject = JSON.parse(localStorageItem);

if (dataObject != null) {
  const username = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('msg');

  username.value = dataObject.name;
  email.value = dataObject.email;
  msg.value = dataObject.message;
}
