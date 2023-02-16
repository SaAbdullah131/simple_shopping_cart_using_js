
/* 
1.Addd event listener to the case plus button
2.Get the value inside the case number fidld (input filed)
3.Convert the number to an integer
4.set the value to the case number field
*/
document.getElementById("btn-case-plus").addEventListener("click",function(){
  const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
});

document.getElementById("btn-case-minus").addEventListener("click",function(){
   const newCaseNumber = updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
})