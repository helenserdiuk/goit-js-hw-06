// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать
// и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
//счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counter = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  decrement(value) {
    this.value -= 1;
  },
};

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  counterValue.textContent = counter.value;
});
