const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const sessionAccount = {
    email: "tobi@gmail.com",
    password: "tobi"
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    
    if (email.value === sessionAccount.email && sessionAccount.password === password.value) {
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("quantity", "0")
        localStorage.setItem("email", sessionAccount.email);

        window.location.href = "index.html";
    } else {
        email.value = "";
        password.value = "";
        alert("Su email o contraseña está incorrecto, inténtelo nuevamente");
    }
});
