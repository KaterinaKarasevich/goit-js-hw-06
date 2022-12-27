function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector(".color");
console.log(changeColorEl)
const changeColorBtn = document.querySelector(".change-color");
console.log(changeColorBtn)
const body = document.querySelector("body");
console.log(body)

changeColorBtn.addEventListener("click", onChangeColorBtn);
function onChangeColorBtn () {
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  changeColorEl.textContent = color;
}