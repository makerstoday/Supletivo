const form = documentElementById("#form");
const nameInput = documentElementById("#name");
const emailInput = documentElementById("#email");
const phoneInput = documentElementById("#phone");
const interestSelect = documentElementById("#interest");

form.addEnentListener("submit", (event) => {
    event.preventDeFault();

    if(nameInput.value === "") {
        alert("por favor");
        return;
    }
})