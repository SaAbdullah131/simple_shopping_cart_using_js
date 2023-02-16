
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById("case-number-field");
    const previousCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber ;
    if(isIncrease===true){
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }
      caseNumberField.value = newCaseNumber;
      return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
 caseTotalElement.innerText = caseTotalPrice;

}