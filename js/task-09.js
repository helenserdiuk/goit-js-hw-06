// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const btn = document.querySelector(".change-color");
const codeColor = document.querySelectorAll(".color");

codeColor[0].textContent = "#ffffff";

btn.addEventListener("click", () => {
  body.style.background = getRandomHexColor();
  codeColor[0].textContent = `${(body.style.background = getRandomHexColor())}`;
});
