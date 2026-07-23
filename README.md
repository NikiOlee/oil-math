# Считалка стоимости топлива
Это считалка стоимости **топлива** или **нефти** или *еще чего я не знаю*. :neutral_face:
___
Если хотите ссылку на страницу то она в описании а также вот: [nikiolee.github.io](https://nikiolee.github.io/oil-math/)
___
Значения а также тема сохраняется через local storage:
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
