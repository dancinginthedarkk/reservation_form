/**
 * @module errorHandling
 */


const error = document.querySelector('#error');

/**
 * Отображает сообщение об ошибке.
 * @param {HTMLElement} element - элемент, в котором будет отображаться сообщение об ошибке.
 * @param {string} message - отображаемое сообщение об ошибке.
 */
export function showErrorMessage(element, message) {
    element.textContent = message;
}

/**
 * Удаляет сообщение об ошибке, устанавливая содержимое элемента ошибки в пустую строку.
 */
export function clearErrorMessages() {
    error.textContent = '';
}




