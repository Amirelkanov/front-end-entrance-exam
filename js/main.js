import {
    createRipple,
    enableTextElementEditing,
    loadInitialContent,
} from './initHelpers.js';

import initialContentConfig from '../public/assets/configs/initialContentConfig.json';

import { onChangeRangeInput, onLike, onDownloadPDF } from './handlers.js';

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        loadInitialContent(initialContentConfig);
        document
            .querySelectorAll(
                Object.entries(initialContentConfig)
                    .map(([id, value]) => {
                        let elementSelector;
                        if (value.items) {
                            elementSelector = value.itemsClasses
                                .map((className) => `.${className}`)
                                .join('');
                        } else {
                            elementSelector = `#${id}`;
                        }

                        return elementSelector;
                    })
                    .join(', ')
            )
            .forEach(enableTextElementEditing);
    });

    document
        .querySelectorAll('.language-level-inputs .input')
        .forEach((input) => {
            input.addEventListener('input', (event) =>
                onChangeRangeInput(event.target)
            );
            onChangeRangeInput(input);
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
