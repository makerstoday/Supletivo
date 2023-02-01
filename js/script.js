const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const interestSelect = document.querySelector("#interest");


    //função de validação
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verificar se o nome é valido
    if (nameInput.value === ("")){
        alert("Por favor escreva um nome valido!!");
        return;
    }

    // verificar se o email é valido
    if (emailInput.value === ("")){
        alert("Por favor escreva um email valido!!");
        return;
    }

     // verificar se o phone é valido
     if (phoneInput.value === ("")){
    alert("Por favor escreva um email valido!!");
    return;
    }   


    // selecione huma opção valida
    if (interestSelect.value === "" ) {
        alert("Por favor selecione uma opção!!");
        return;
    }
    //se todos os campos tiverem preenchido , enviar
    form.submit();
    
});

/*const button = document.getElementById('btn');

button.addEventListener('click', function(event) {
  validateForm();
  sendForm();
});*/