const input = document.querySelector("#validation-input");
console.log(input)

const inputLength = input.dataset.length;
console.log(inputLength)



input.addEventListener("blur", () => {
       input.classList.remove("invalid");
    if (input.value.length === Number(inputLength)) {
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
  
    }    
      
});

