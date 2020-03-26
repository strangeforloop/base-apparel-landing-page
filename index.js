const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailAddress = email.value;

  // debugger;
  if (!validateEmail(emailAddress)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    document.getElementById('email').value = '';
    document.body.innerHTML = 'Thank you for signing up.';
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(String(email.toLowerCase()));
}