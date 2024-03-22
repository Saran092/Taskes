const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Reset errors
  clearErrors();

  // Validate inputs
  let isValid = true;

  if (username === '') {
    showError('username', 'Username is required');
    isValid = false;
  }

  if (email === '') {
    showError('email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('email', 'Invalid email format');
    isValid = false;
  }

  if (password === '') {
    showError('password', 'Password is required');
    isValid = false;
  } else if (password.length < 6) {
    showError('password', 'Password must be at least 6 characters long');
    isValid = false;
  }

  if (confirmPassword === '') {
    showError('confirmPassword', 'Please confirm your password');
    isValid = false;
  } else if (confirmPassword !== password) {
    showError('confirmPassword', 'Passwords do not match');
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
    // Here you can submit the form or perform any other action
    // For example: form.submit();
  }
});

function showError(inputId, message) {
  const errorDiv = document.getElementById(`${inputId}Error`);
  errorDiv.textContent = message;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(error => {
    error.textContent = '';
  });
}

function isValidEmail(email) {
  // Basic email validation, you can use a more sophisticated method
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}