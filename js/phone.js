document.getElementById("btn-phone-plus").addEventListener("click",function(){
    
    const phoneNumberField = document.getElementById("phone-number-field");
    const previousPhoneNumber = parseInt(phoneNumberField.value);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;


})