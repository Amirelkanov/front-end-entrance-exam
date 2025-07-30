import { updateRangeInput } from './initHelpers.js';
import html2pdf from 'html2pdf.js';

function main() {
    document.querySelectorAll('input[type="range"]').forEach((input) => {
        input.addEventListener('input', (event) =>
            updateRangeInput(event.target)
        );
        updateRangeInput(input);
    });

    document
        .getElementById('download-pdf-btn')
        .addEventListener('click', () => {
            html2pdf(document.getElementById('app'));
        });
}

main();
