
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribeForm');
  const message = document.getElementById('subscribeMessage');

  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('subscriberEmail').value;

      message.style.display = 'block';
      message.textContent = `धन्यवाद ${email} सब्सक्राइब गरेकोमा!`;
      form.reset();

      setTimeout(() => {
        message.style.display = 'none';
      }, 5000);
    });
  }
});
