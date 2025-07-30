import html2pdf from 'html2pdf.js';

function onChangeRangeInput(rangeInput) {
    rangeInput.style.setProperty(
        '--input-value',
        `${((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100}%`
    );
}

function onLike(event) {
    event.target.classList.toggle('fa-solid');
    event.target.classList.toggle('fa-regular');

    const closestEducationItem = event.target.closest('.education-item');
    if (closestEducationItem) {
        closestEducationItem.classList.toggle('accent-1');
    }
}

function onDownloadPDF() {
    const element = document.getElementById('app');
    html2pdf().set({ filename: 'cv.pdf' }).from(element).save();
}

export { onChangeRangeInput, onLike, onDownloadPDF };
