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
