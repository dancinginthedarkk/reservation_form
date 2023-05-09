const datetimeError = document.querySelector('#datetime-error');
export function showErrorMessage(element, message) {
    element.textContent = message;
}

export function clearErrorMessages() {
    datetimeError.textContent = '';
}




