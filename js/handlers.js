import html2pdf from 'html2pdf.js';

function onChangeRangeInput(rangeInput) {
    rangeInput.style.setProperty(
        '--input-value',
        `${((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100}%`
    );

    // Update config
    const config = JSON.parse(localStorage.getItem('initialContentConfig'));
    config['language-levels'][rangeInput.id] = rangeInput.value;
    localStorage.setItem('initialContentConfig', JSON.stringify(config));
}

function onLike(event) {
    const button = event.currentTarget;
    const icon = button.firstElementChild;

    if (icon) {
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('fa-regular');
    }

    const closestEducationItem = button.closest('.education-item');
    if (closestEducationItem) {
        closestEducationItem.classList.toggle('accent-1');
    }

    // Update config
    const config = JSON.parse(localStorage.getItem('initialContentConfig'));

    const index = Array.from(closestEducationItem.parentNode.children).indexOf(
        closestEducationItem
    );

    const likedItemsIndexes = config['education-grid-items-liked'];
    likedItemsIndexes[index] = !likedItemsIndexes[index];

    localStorage.setItem('initialContentConfig', JSON.stringify(config));
}

function onDownloadPDF() {
    const element = document.getElementById('app');
    html2pdf().set({ filename: 'cv.pdf' }).from(element).save();
}

export { onChangeRangeInput, onLike, onDownloadPDF };
