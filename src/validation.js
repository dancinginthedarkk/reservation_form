/**
 * @module validation
 */


/**
 * Функция проверки времени, которая сверяет введенное время с настоящим, чтобы предотвратить ввод прошедшего времени.
 * @param {string} datetimeValue - значение даты и времени для проверки.
 * @returns {boolean} — возвращает true, если значение даты и времени допустимо и превышает текущее значение даты и времени, в противном случае возвращает false.
 */
export function isDatetimeValid(datetimeValue) {
    const selectedDateTime = new Date(datetimeValue);
    const currentDateTime = new Date();
    return selectedDateTime > currentDateTime;
}

/**
 * Проверяет пользовательские элементы выбора в форме.
 * @returns {boolean} — возвращает true, если все элементы пользовательского выбора имеют выбранное значение, отличное от параметров по умолчанию, в противном случае возвращает false.
 */
export function validateCustomSelects() {
    const customSelects = document.querySelectorAll('.form__custom-select');

    let isValid = true;

    customSelects.forEach(customSelect => {
        const selectedValue = customSelect.querySelector('.form__select-selected').textContent;

        if (selectedValue === 'Выберите башню' || selectedValue === 'Выберите этаж' || selectedValue === 'Выберите комнату') {
            isValid = false;
        }
    });

    return isValid;
}
