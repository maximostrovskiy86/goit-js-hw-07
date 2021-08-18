const refs = {
    getValueInput: document.querySelector('#font-size-control'),
    changeSizeSpan: document.querySelector('#text'),
}

const makeValueFontSize = () => {
    refs.changeSizeSpan.style.fontSize = refs.getValueInput.value + 'px';
}

refs.getValueInput.addEventListener('input', makeValueFontSize);