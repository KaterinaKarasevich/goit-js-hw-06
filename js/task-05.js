const input = document.querySelector("#name-input");
const markUp = document.querySelector("#name-output");
console.log(input)
console.log(markUp)

input.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        markUp.textContent = "Anonymous"
        return
    }
    markUp.textContent = event.currentTarget.value
})
    