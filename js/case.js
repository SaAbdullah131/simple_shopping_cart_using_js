
document.getElementById("btn-case-plus").addEventListener("click",function(){

  const caseNumberField = document.getElementById("case-number-field");
  const previousCaseNumber = parseInt(caseNumberField.value);
  const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})