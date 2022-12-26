const input = document.querySelector("#font-size-control");
console.log(input)
const textEl = document.querySelector("#text");
console.log(text)

input.addEventListener("input", () => {
    textEl.style.fontSize = input.value + "px"
})