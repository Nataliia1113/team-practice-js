/*
~Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const buttonEl = document.querySelector("#alertButton")
// const inputEl = document.querySelector("#alertInput")
// console.log(inputEl)

// function pressHandler(event) {
//     console.log(inputEl.value)
//     console.log(event)
// }

// buttonEl.addEventListener("click", pressHandler)

// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
//

// const buttonEl = document.querySelector("#swapButton")
// const inputEl = document.querySelector("#leftSwapInput")
// const inputElRight = document.querySelector("#rightSwapInput")

// function pressHandler(event) {
//     const valueInputLeft = inputEl.value
//     const valueInputRight = inputElRight.value
//     inputEl.value = valueInputRight
//     inputElRight.value = valueInputLeft
//     console.log(event)
// }

// buttonEl.addEventListener("click", pressHandler)

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const inputEl = document.querySelector("#passwordInput");
// const passwordElBtn = document.querySelector("#passwordButton");

// function inputHandler() {
//   console.log(inputEl.type);
//   if (inputEl.type === "text") {
//     inputEl.type = "password";
//     passwordElBtn.textContent = "Poзкрити";
//   } else {
//     inputEl.type = "text";
//     passwordElBtn.textContent = "Приховати";
//   }
// }

// passwordElBtn.addEventListener("click", inputHandler);

/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/

/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
