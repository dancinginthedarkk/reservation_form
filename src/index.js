import './index.css';
import { isDatetimeValid, validateCustomSelects } from './validation.js';
import { clearErrorMessages, showErrorMessage } from './errorHandling.js';
import { getValue } from './options.js';

const form = document.querySelector('#booking-form');
const towerSelect = document.querySelector('#tower');
const floorSelect = document.querySelector('#floor');
const intercomSelect = document.querySelector('#intercom');
const sendBtn = document.querySelector('#send-btn');
const clearBtn = document.querySelector('#clear-btn');

const datetimeInput = document.querySelector('#datetime');
const error = document.querySelector('#error');


sendBtn.addEventListener('click', function (event) {
    event.preventDefault();

    clearErrorMessages();

    if (!validateCustomSelects()) {
        showErrorMessage(error, 'Необходимо заполнить все поля формы.');
        return;
    }

    if (!isDatetimeValid(datetimeInput.value)) {
        showErrorMessage(error, 'Данные дата и/или время недействительны! Введите другие значения.');
        return;
    }

    const formData = {
        tower: getValue('#tower'),
        floor: getValue('#floor'),
        intercom: getValue('#intercom'),
        datetime: getValue('#datetime'),
        comment: getValue('#comment'),
    };

    console.log(JSON.stringify(formData));
});

clearBtn.addEventListener('click', function (event) {
    event.preventDefault();
    towerSelect.value = "Выберите башню";
    towerSelect.textContent = "Выберите башню";

    floorSelect.value = "Выберите этаж";
    floorSelect.textContent = "Выберите этаж";

    intercomSelect.value = "Выберите комнату";
    intercomSelect.textContent = "Выберите комнату";
    form.reset();
    clearErrorMessages();
});

