function updatePhoneNumber (isIncrease) {
    const phoneNumberField = document.getElementById("phone-number-field");
    const previousPhoneNumber = parseInt(phoneNumberField.value);

    let newPhoneNumber;
    if(isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber -1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
   const phoneTotalPrice = newPhoneNumber * 1229;
   const phoneTotalElement = document.getElementById("phone-total");
   phoneTotalElement.innerText = phoneTotalPrice;

}

function getTextElementValueById(elementId) {
     // calculate total
     const phoneTotalElement = document.getElementById(elementId);
     const currentPhoneTotalString = phoneTotalElement.innerText;
     const currentPhoneTotal = parseInt(currentPhoneTotalString);
     return currentPhoneTotal;
};

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById("phone-total");
    const currentCaseTotal  = getTextElementValueById("case-total");

    const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    console.log(currentSubtotal);
   const subTotalElement = document.getElementById("sub-total");

   subTotalElement.innerText = currentSubtotal;
}

document.getElementById("btn-phone-plus").addEventListener("click",function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    // calculate total
   calculateSubTotal();
    
});

document.getElementById("btn-phone-minus").addEventListener("click",function(){
   const newPhoneNumber =  updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

})