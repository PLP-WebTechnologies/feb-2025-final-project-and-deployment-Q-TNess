// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        alert('Enter a valid email address.');
        return;
      }

      alert('Message submitted successfully!');
      form.reset();
    });
  }
});
