import { createRipple, enableTextElementEditing } from './initHelpers.js';

import { onChangeRangeInput, onLike, onDownloadPDF } from './handlers.js';

function main() {
    document.querySelectorAll('input[type="range"]').forEach((input) => {
        input.addEventListener('input', (event) =>
            onChangeRangeInput(event.target)
        );
        onChangeRangeInput(input);
    });

    document
        .querySelectorAll(
            'h1, h2, h3, h4, p, time, address, label, span, li.text-content-item'
        )
        .forEach(enableTextElementEditing);

    document
        .querySelectorAll('.icon-button.like-button')
        .forEach((likeBtn) => likeBtn.addEventListener('click', onLike));

    document
        .getElementById('download-pdf-btn')
        .addEventListener('click', onDownloadPDF);

    document
        .querySelectorAll('.card')
        .forEach((card) => card.addEventListener('click', createRipple));
}

main();
