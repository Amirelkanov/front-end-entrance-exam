import {
    createRipple,
    enableTextElementEditing,
    updateRangeInput,
} from './initHelpers.js';
import html2pdf from 'html2pdf.js';

function main() {
    // Maintain actual value of range inputs
    document.querySelectorAll('input[type="range"]').forEach((input) => {
        input.addEventListener('input', (event) =>
            updateRangeInput(event.target)
        );
        updateRangeInput(input);
    });

    // Enable content editing for all text elements
    document
        .querySelectorAll(
            'h1, h2, h3, h4, p, time, address, label, span, li.text-content-item'
        )
        .forEach(enableTextElementEditing);

    // Like button logic
    document.querySelectorAll('.icon-button.like-button').forEach((likeBtn) => {
        likeBtn.addEventListener('click', (event) => {
            event.target.classList.toggle('fa-solid');
            event.target.classList.toggle('fa-regular');

            const closestEducationItem =
                event.target.closest('.education-item');
            if (closestEducationItem) {
                closestEducationItem.classList.toggle('accent-1');
            }
        });
    });

    // Download PDF
    document
        .getElementById('download-pdf-btn')
        .addEventListener('click', () => {
            const element = document.getElementById('app');

            html2pdf().set({ filename: 'cv.pdf' }).from(element).save();
        });

    // Add ripple effect for all cards
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', createRipple);
    });
}

main();
