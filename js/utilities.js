
function getElementValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseInt(inputField.value);
    return inputValue;
}