function updateRangeInput(rangeInput) {
    // eslint-disable-next-line
    const percent = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
    rangeInput.style.setProperty('--input-value', `${percent}%`);
}

export { updateRangeInput };
