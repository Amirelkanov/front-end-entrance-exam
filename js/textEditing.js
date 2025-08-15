export function enableTextElementEditing(textElement) {
    textElement.classList.add('editable-text-content');

    textElement.addEventListener('click', (event) => {
        event.preventDefault();

        const textElem = event.target;

        textElem.contentEditable = 'true';

        textElem.style.maxWidth = `${textElem.getBoundingClientRect().width}px`;
        textElem.style.maxHeight = `${textElem.getBoundingClientRect().height}px`;
        textElem.style.textOverflow = '';
        textElem.style.overflow = 'hidden';

        textElem.focus();
    });

    textElement.addEventListener('input', (event) => {
        const config = JSON.parse(localStorage.getItem('initialContentConfig'));
        if (event.target.tagName === 'LI') {
            const children = Array.from(event.target.parentNode.children);
            const index = children.indexOf(event.target);
            config[event.target.parentNode.id].items[index] =
                event.target.textContent;
        } else {
            config[event.target.id] = event.target.textContent;
        }

        localStorage.setItem('initialContentConfig', JSON.stringify(config));
    });

    textElement.addEventListener('keydown', (event) => {
        const textElem = event.target;

        if (document.activeElement === textElem && event.key === 'Enter') {
            event.preventDefault();

            textElem.blur();
        }
    });

    textElement.addEventListener('blur', (event) => {
        const textElem = event.target;
        textElem.contentEditable = 'false';

        textElem.scrollTop = 0;
        textElem.scrollLeft = 0;
        textElem.style.textOverflow = 'ellipsis';
    });
}
