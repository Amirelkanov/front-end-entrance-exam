import { enableTextElementEditing } from './textEditing.js';
import { loadInitialContent } from './config.js';
import { createRipple } from './animation.js';

import { onChangeRangeInput, onLike, onDownloadPDF } from './handlers.js';

function main() {
    document.addEventListener('DOMContentLoaded', async () => {
        const config = await loadInitialContent();

        const textElementsSelectors = Object.entries(
            config['text-elements-content']
        )
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
            .join(', ');

        document
            .querySelectorAll(textElementsSelectors)
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
