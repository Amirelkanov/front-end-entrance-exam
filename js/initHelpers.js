function enableTextElementEditing(textElement) {
    textElement.addEventListener('click', (event) => {
        event.target.focus();
        event.target.contentEditable = 'true';
    });

    textElement.addEventListener('keydown', (event) => {
        if (document.activeElement === event.target && event.key === 'Enter') {
            event.target.blur();
            event.target.contentEditable = 'false';
            event.preventDefault();
        }
    });
}

function calculateMaxDist(x, y, width, height) {
    // Max dist from point to each corner
    return Math.max(
        Math.sqrt(x * x + y * y),
        Math.sqrt((width - x) ** 2 + y * y),
        Math.sqrt(x * x + (height - y) ** 2),
        Math.sqrt((width - x) ** 2 + (height - y) ** 2)
    );
}

function createRipple(event) {
    event.stopPropagation();

    const element = event.currentTarget;

    // Clear previous ripple if exists
    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) existingRipple.remove();

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const maxRadius = calculateMaxDist(x, y, rect.width, rect.height);

    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    ripple.style.setProperty('--x', `${x}px`);
    ripple.style.setProperty('--y', `${y}px`);
    ripple.style.setProperty('--size', `${maxRadius}px`);

    element.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
}

export { enableTextElementEditing, createRipple };
