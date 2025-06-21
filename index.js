const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.parentNode.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      input.parentNode.classList.remove('active');
      input.parentNode.parentNode.nextElementSibling.classList.add('show');
    } else {
      input.parentNode.parentNode.nextElementSibling.classList.remove('show');
    }
  });

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.parentNode.classList.add('active');
      input.parentNode.parentNode.nextElementSibling.classList.remove('show');
    } else {
      input.parentNode.classList.remove('active');
    }
  });
});
