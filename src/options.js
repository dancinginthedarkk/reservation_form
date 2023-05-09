const intercomSelect = document.querySelector('#intercom-ul');
const floorSelect = document.querySelector('#floor-ul');

initializeOptions(floorSelect, 3, 27);
initializeOptions(intercomSelect, 1, 10);

const selectElements = document.querySelectorAll('.form__custom-select');

selectElements.forEach((selectElement) => {
    const selected = selectElement.querySelector('.form__select-selected');
    const options = selectElement.querySelector('.form__select-options');


    selected.addEventListener('click', function() {
        const parentSelect = this.parentNode;
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
        const otherSelects = document.querySelectorAll('.form__custom-select');

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

    options.addEventListener('click', function(e) {
        const parentSelect = this.parentNode;
        parentSelect.style.position = '';

        let selectedOption = e.target;
        selected.value = selectedOption.getAttribute('value');
        selected.textContent = selectedOption.textContent;
        options.style.display = 'none';
    });
});

export function initializeOptions(selectElement, start, end) {
    for (let i = start; i <= end; i++) {
        const option = createOption(i);
        selectElement.appendChild(option);
    }
}

function createOption(value) {
    const option = document.createElement('li');
    option.value = value;
    option.textContent = value;
    return option;
}

export function getValue(selector) {
    return document.querySelector(selector).value;
}
