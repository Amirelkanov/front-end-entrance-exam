function updateRangeInput(rangeInput) {
    // eslint-disable-next-line
    const percent = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
    rangeInput.style.setProperty('--input-value', `${percent}%`);
}

document
    .querySelectorAll(
        'h1, h2, h3, h4, p, time, address, label, span, li.text-content-item'
    )
    .forEach((textElement) => {
        textElement.addEventListener('click', (event) => {
            event.target.focus();
            event.target.contentEditable = 'true';
        });

        // TODO: может, не очень
        textElement.addEventListener('keydown', (event) => {
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

document.querySelectorAll('.icon-button.like-button').forEach((likeBtn) => {
    likeBtn.addEventListener('click', (event) => {
        event.target.classList.toggle('fa-solid');
        event.target.classList.toggle('fa-regular');

        let closestEducationItem = event.target.closest('.education-item');
        if (closestEducationItem) {
            closestEducationItem.classList.toggle('accent-1');
        }
    });
});

export { updateRangeInput };
