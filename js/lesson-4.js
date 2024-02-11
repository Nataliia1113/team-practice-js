/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
const circle = document.querySelector(".outerCircle");

circle.addEventListener("click", handleClick);
function handleClick(event) {
  const item = event.currentTarget;
  //    console.log(window.getComputedStyle(item).position);
 if (item.style.position === "absolute"){
    item.style.position = "static";
    item.style.left = "unset";
    item.style.top = "unset";
    window.removeEventListener("mousemove", onMousemove);
    return;
 } 
  item.style.position = "absolute";
  window.getComputedStyle(item);
  window.addEventListener("mousemove", onMousemove);
  // console.log(window.getComputedStyle(item).position);
  
}
function onMousemove(event) {
  circle.style.left = event.pageX - 20 + "px";
  circle.style.top = event.pageY - 20 + "px";

  // console.log(event.pageX, event.pageY);
}
