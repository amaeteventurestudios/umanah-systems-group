(function () {
  'use strict';

  const form = document.getElementById('lucentContactForm');
  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');

  if (!form) return;

  function showError(message) {
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.classList.add('show');
  }

  function clearMessages() {
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('show');
    }
    if (successEl) successEl.classList.remove('show');
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearMessages();

    const name = form.querySelector('#name');
    const company = form.querySelector('#company');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    if (!name.value.trim() || !company.value.trim() || !email.value.trim() || !message.value.trim()) {
      showError('Please complete all fields before submitting.');
      return;
    }

    if (!isValidEmail(email.value.trim())) {
      showError('Please enter a valid email address.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending…';
    }

    try {
      const response = await fetch('https://formspree.io/f/xeelnkqj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });

      if (!response.ok) throw new Error('Submission failed');

      form.reset();
      if (successEl) successEl.classList.add('show');
    } catch (error) {
      showError('Something went wrong. Please try again or email contact@umanahsystems.com.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
})();
