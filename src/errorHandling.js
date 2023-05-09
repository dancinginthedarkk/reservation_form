const error = document.querySelector('#error');
export function showErrorMessage(element, message) {
    element.textContent = message;
}

export function clearErrorMessages() {
    error.textContent = '';
}




