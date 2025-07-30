import html2pdf from 'html2pdf.js';

function onChangeRangeInput(rangeInput) {
    rangeInput.style.setProperty(
        '--input-value',
        `${((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100}%`
    );
}

function onLike(event) {
    const button = event.currentTarget;
    const icon = button.querySelector('i');

    if (icon) {
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('fa-regular');
    }

    const closestEducationItem = button.closest('.education-item');
    if (closestEducationItem) {
        closestEducationItem.classList.toggle('accent-1');
    }
}

function onDownloadPDF() {
    const element = document.getElementById('app');
    html2pdf().set({ filename: 'cv.pdf' }).from(element).save();
}

export { onChangeRangeInput, onLike, onDownloadPDF };
