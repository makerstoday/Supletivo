const Form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const interestSelect = document.querySelector("#interest");

form.addEventListener("submit",(event) => {
    event.preventDeFault();

    if (emailInput.value  ("")) {
        alert("por favor");
        return;
    }
    form.submit();
})