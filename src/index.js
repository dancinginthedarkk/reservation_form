/**
 * @module index
 */


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

/**
 * Прослушиватель события для кнопки отправления по клику, который перед отправкой проверяет валидацию полей,
 * берет значения селекторов и пишет в консоль значения формы в виде json (без обновления страницы).
 * @listens sendBtn#click
 * @param {Event} event - event объект.
 */
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

/**
 * Прослушиватель события для кнопки очищения по клику, который очищает форму
 * и возвращает селекторам дефолтные значения (без обновления страницы).
 * @listens clearBtn#click
 * @param {Event} event - event объект.
 */
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

