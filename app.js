let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");

const onSubmit = () => {
    const info = [firstName, lastName, email, password];

    inputs.forEach((input) => {
        if (input.value === "") {
            input.classList.add("error");
        } 

    })
}


