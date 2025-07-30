function updateRangeInput(rangeInput) {
    // eslint-disable-next-line
    const percent = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
    rangeInput.style.setProperty('--input-value', `${percent}%`);
}

document
    .querySelectorAll('h1, h2, h3, h4, p, time, address, label, span')
    .forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.focus();
            event.target.contentEditable = 'true';
        });

        // TODO: может, не очень
        element.addEventListener('keydown', (event) => {
            if (
                document.activeElement === event.target &&
                event.key === 'Enter'
            ) {
                event.target.blur();
                event.target.contentEditable = 'false';
                event.preventDefault();
            }
        });
    });

export { updateRangeInput };
