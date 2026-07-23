const themeBtn = document.querySelector('.themeBtn');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeBtn.textContent = '🌞';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeBtn.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
  } else {
    themeBtn.textContent = '🌝';
    localStorage.setItem('theme', 'light');
  }
});
