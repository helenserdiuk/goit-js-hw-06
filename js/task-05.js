// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  event.target.value === ""
    ? (outputText.textContent = "Anonymous")
    : (outputText.textContent = event.target.value);
});
