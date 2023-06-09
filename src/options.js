/**
 * @module options
 */


const intercomSelect = document.querySelector('#intercom-ul');
const floorSelect = document.querySelector('#floor-ul');
const selectElements = document.querySelectorAll('.form__custom-select');

initializeOptions(floorSelect, 3, 27);
initializeOptions(intercomSelect, 1, 10);

selectElements.forEach((selectElement) => {
    const selected = selectElement.querySelector('.form__select-selected');
    const options = selectElement.querySelector('.form__select-options');

    /**
     * Прослушиватель событий для селектора, он скрывает/открывает выпадающий список значений при клике,
     * а также реализует возмжность только одного одновременного открытия выпадающего списка.
     * @listens selected#click
     */
    selected.addEventListener('click', function() {
        const parentSelect = this.parentNode;
        const otherSelects = document.querySelectorAll('.form__custom-select');

        options.style.display = options.style.display === 'block' ? 'none' : 'block';

        if (options.style.display === 'block') {
            parentSelect.style.position = 'relative';
        } else {
            parentSelect.style.position = '';
        }

        otherSelects.forEach(function(otherSelect) {
            if (otherSelect !== parentSelect) {
                otherSelect.style.position = '';
                const otherOptions = otherSelect.querySelector('.form__select-options');
                otherOptions.style.display = 'none';
            }
        });

    });

    /**
     * Прослушиватель события по клику для options элементов,
     * который при нажатии на options выставляет значение селектору и скрывает выпадающий список.
     * @listens options#click
     * @param {Event} event - event объект.
     */
    options.addEventListener('click', function(event) {
        let selectedOption = event.target;
        selected.value = selectedOption.getAttribute('value');
        selected.textContent = selectedOption.textContent;
        options.style.display = 'none';
    });
});

/**
 * Инициализирует параметры для элемента select с диапазоном значений.
 * @param {HTMLElement} selectElement - элемент, для которого инициализируются параметры.
 * @param {number} start - начальное значение.
 * @param {number} end - конечное значение.
 */
export function initializeOptions(selectElement, start, end) {
    for (let i = start; i <= end; i++) {
        const option = createOption(i);
        selectElement.appendChild(option);
    }
}
/**
 * Создает и возвращает элементы списка с указанными значениями.
 * @param {number | string} value - значение параметра.
 * @returns {HTMLElement} - созданный элемент списка.
 */
function createOption(value) {
    const option = document.createElement('li');
    option.value = value;
    option.textContent = value;
    return option;
}

/**
 * Извлекает значение элемента, указанного селектором.
 * @param {string} selector - селектор.
 * @returns {string} - значение селектора.
 */
export function getValue(selector) {
    return document.querySelector(selector).value;
}
