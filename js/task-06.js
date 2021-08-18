const refsInput = document.querySelector('#validation-input');

const makeValidationInput = () => {
    const valueDataLength = +refsInput.dataset.length;
    const valueInputLength = +refsInput.value.length;
    console.log(valueDataLength, valueInputLength)

    refsInput.classList.remove('invalid', 'valid');

    if (valueDataLength === valueInputLength) {
        refsInput.classList.add('valid');
    } else if (valueDataLength !== valueInputLength && valueInputLength > 0){
        refsInput.classList.add('invalid');
    }

}

refsInput.addEventListener('blur', makeValidationInput);