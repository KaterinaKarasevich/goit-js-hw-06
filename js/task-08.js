   
const loginForm = document.querySelector(".login-form");


loginForm.addEventListener("submit", onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    const
        { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены.")
        
    } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`)
    }

loginForm.reset();
};



