// Pequena interação visual nos botões
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    setTimeout(() => {
      btn.classList.remove('active');
    }, 200);
  });
});
