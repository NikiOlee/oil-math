# Считалка стоимости топлива <img src="diploma.jfif" width="30" height="30" alt="Transoil logo">
Это считалка стоимости **топлива** или **нефти** или *еще чего я не знаю*. :neutral_face:
___
Если хотите ссылку на страницу то она в описании а также вот: [nikiolee.github.io](https://nikiolee.github.io/oil-math/)
___
Значения а также тема сохраняется через local storage: <br> <br>
**JavaScript**
```js
const inputs = document.querySelectorAll('.container input');

inputs.forEach((input) => {
  const savedValue = localStorage.getItem(input.id);
  if (savedValue !== null) {
    input.value = savedValue;
  }
  input.addEventListener("input", () => {
    localStorage.setItem(`${input.id}`, input.value);
  });
});

```
___
Шаблон для темы который используется сдесь<br> <br>
**JavaScript**
```js
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
```
**CSS**
```css
body.dark-theme {
  background-color: #1a1a1a;
  color: whitesmoke;
}
```
