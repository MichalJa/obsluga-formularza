const submitForm = (event) => {
    event.preventDefault();
    let firstName= document.querySelector('[name="fname"]');
    let lastName= document.querySelector('[name="lname"]');

    console.log(`Imię: ${firstName.value}, Nazwisko: ${lastName.value}`);

}

document.getElementById('form').addEventListener('submit', submitForm);














