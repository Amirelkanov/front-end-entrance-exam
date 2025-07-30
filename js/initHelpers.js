function updateRangeInput(rangeInput) {
    // eslint-disable-next-line
    const percent = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
    rangeInput.style.setProperty('--input-value', `${percent}%`);
}

function enableTextElementEditing(textElement) {
    textElement.addEventListener('click', (event) => {
        event.target.focus();
        event.target.contentEditable = 'true';
    });

    textElement.addEventListener('keydown', (event) => {
        if (document.activeElement === event.target && event.key === 'Enter') {
            event.target.blur();
            event.target.contentEditable = 'false';
            event.preventDefault();
        }
    });
}

function createRipple(event) {
    event.stopPropagation();

    const element = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add('ripple');

    const rect = element.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    circle.style.left = `${clickX - radius}px`;
    circle.style.top = `${clickY - radius}px`;

    // Clear previous ripple if exists
    const existing = element.querySelector('.ripple');
    if (existing) existing.remove();

    element.appendChild(circle);
    circle.addEventListener('animationend', () => circle.remove());
}

export { updateRangeInput, enableTextElementEditing, createRipple };
