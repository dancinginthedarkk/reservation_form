export function isDatetimeValid(datetimeValue) {
    const selectedDateTime = new Date(datetimeValue);
    const currentDateTime = new Date();
    return selectedDateTime > currentDateTime;
}

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
