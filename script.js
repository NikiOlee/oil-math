const B8 = document.getElementById("7");
const B7 = document.getElementById("6");
const B6 = document.getElementById("5");
const B5 = document.getElementById("4");
const B4 = document.getElementById("3");
const B3 = document.getElementById("2");
const B2 = document.getElementById("1");

const calcBtn = document.getElementById("calcBtn");

const resPriceTon = document.getElementById("resPriceTon");
const resDelivTon = document.getElementById("resDelivTon");
const resTotalTon = document.getElementById("resTotalTon");

const resPriceLiter = document.getElementById("resPriceLiter");
const resDelivLiter = document.getElementById("resDelivLiter");
const resTotalLiter = document.getElementById("resTotalLiter");

function calculate() {
  // Получаем значения из полей
  const vPurchase = parseFloat(B8.value) || 0; // B8: Цена закупа
  const vDelivery = parseFloat(B7.value) || 0; // B7: Доставка
  const vDensity = parseFloat(B6.value) || 1;  // B6: Плотность
  const vDeferment = parseFloat(B5.value) || 0; // B5: Отсрочка
  const vYieldYear = (parseFloat(B4.value) || 0) / 100; // B4: Доходность
  const vMinMarkup = (parseFloat(B3.value) || 0) / 100; // B3: Мин. наценка
  const vCostMoney = (parseFloat(B2.value) || 0) / 100; // B2: Ст-ть денег

  // 1. Мин. цена закупа с наценкой (Ячейка C8 в таблице)
  const minPrice = vPurchase * (1 + vMinMarkup);

  // 2. Множитель процентов: (1 + B2*B5 + B4/365*B5)
  const multiplier = 1 + vCostMoney * vDeferment + (vYieldYear / 365) * vDeferment;

  // 3. Формула из LibreOffice: C8 * multiplier
  const priceTon = minPrice * multiplier;

  const deliveryTon = (vDelivery / vDensity) * 1000 * multiplier;
  const totalTon = priceTon + deliveryTon;

  const priceLiter = (priceTon * vDensity) / 1000;
  const deliveryLiter = (deliveryTon * vDensity) / 1000;
  const totalLiter = priceLiter + deliveryLiter;

  // Округляем до целого через Math.round (чтобы 116 908.6 превращалось в 116 909)
  if (resPriceTon)
    resPriceTon.innerText = Math.round(priceTon).toLocaleString("ru-RU");
  if (resDelivTon)
    resDelivTon.innerText = Math.round(deliveryTon).toLocaleString("ru-RU");
  if (resTotalTon)
    resTotalTon.innerText = Math.round(totalTon).toLocaleString("ru-RU");

  if (resPriceLiter)
    resPriceLiter.innerText = priceLiter.toFixed(2).replace(".", ",");
  if (resDelivLiter)
    resDelivLiter.innerText = deliveryLiter.toFixed(2).replace(".", ",");
  if (resTotalLiter)
    resTotalLiter.innerText = totalLiter.toFixed(2).replace(".", ",");
}

if (calcBtn) {
  calcBtn.addEventListener("click", calculate);
}

// Пересчитываем при загрузке
calculate();