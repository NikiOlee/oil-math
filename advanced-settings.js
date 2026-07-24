const detailsElement = document.querySelector(".advanced-settings");
const btn = document.querySelector("#calcBtn");

if (detailsElement && btn) {
  btn.addEventListener("click", function () {
    detailsElement.open = false;
  });
} else {
  console.warn("Не удалось найти элементы .advanced-settings или #calcBtn");
}
