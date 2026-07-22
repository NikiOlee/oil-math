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
  const vPurchase = parseFloat(B8.value) || 0;
  const vDelivery = parseFloat(B7.value) || 0;
  const vDensity = parseFloat(B6.value) || 1;
  const vDeferment = parseFloat(B5.value) || 0;
  const vYieldYear = (parseFloat(B4.value) || 0) / 100;
  const vMinMarkup = (parseFloat(B3.value) || 0) / 100;
  const vCostMoney = (parseFloat(B2.value) || 0) / 100;

  const minPrice = vPurchase * (1 + vMinMarkup);
  const multiplier =
    1 + vCostMoney * vDeferment + (vYieldYear / 365) * vDeferment;

  let priceTon = vPurchase * multiplier;
  if (priceTon < minPrice) {
    priceTon = minPrice;
  }

  const deliveryTon = (vDelivery / vDensity) * 1000 * multiplier;
  const totalTon = priceTon + deliveryTon;

  const priceLiter = (priceTon * vDensity) / 1000;
  const deliveryLiter = (deliveryTon * vDensity) / 1000;
  const totalLiter = priceLiter + deliveryLiter;

  if (resPriceTon)
    resPriceTon.innerText = Math.ceil(priceTon).toLocaleString("ru-RU");
  if (resDelivTon)
    resDelivTon.innerText = Math.ceil(deliveryTon).toLocaleString("ru-RU");
  if (resTotalTon)
    resTotalTon.innerText = Math.ceil(totalTon).toLocaleString("ru-RU");

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

calculate();
