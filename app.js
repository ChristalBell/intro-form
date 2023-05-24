const onSubmit = () => {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const info = [firstName, lastName, email, password];
    
    info.forEach((input) => {
        if (input.value === "") {
            input.classList.add("error");
        } 

    })
}


