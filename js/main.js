import { enableTextElementEditing } from './textEditing.js';
import {
    loadInitialContent,
    getTextElementSelectorsFromConfig,
} from './config.js';
import { createRipple } from './animation.js';

import { onChangeRangeInput, onLike, onDownloadPDF } from './handlers.js';

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        const config = loadInitialContent();
        document
            .querySelectorAll(getTextElementSelectorsFromConfig(config))
            .forEach(enableTextElementEditing);

        document
            .querySelectorAll('.language-level-inputs .input')
            .forEach((input) => {
                input.addEventListener('input', (event) =>
                    onChangeRangeInput(event.target)
                );
                onChangeRangeInput(input);
            });
    });

    document
        .querySelectorAll('.icon-button.like-button')
        .forEach((likeBtn) => likeBtn.addEventListener('click', onLike));

    document
        .querySelector('#download-pdf-btn')
        .addEventListener('click', onDownloadPDF);

    document
        .querySelectorAll('.card')
        .forEach((card) => card.addEventListener('click', createRipple));
}

main();
