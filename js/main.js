import { createRipple, enableTextElementEditing } from './initHelpers.js';

import { onChangeRangeInput, onLike, onDownloadPDF } from './handlers.js';

function main() {
    const onlyTextElements = Array.from(document.querySelectorAll('*')).filter(
        (el) => {
            const childNodes = Array.from(el.childNodes);
            if (childNodes.length === 0) return false;

            return childNodes.every(
                (node) =>
                    node.nodeType === Node.TEXT_NODE &&
                    node.textContent.trim().length > 0
            );
        }
    );

    onlyTextElements.forEach(enableTextElementEditing);

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
