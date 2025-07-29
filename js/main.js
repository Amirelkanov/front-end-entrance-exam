import { updateRangeInput } from './initHelpers.js';

function main() {
    document.querySelectorAll('input[type="range"]').forEach((input) => {
        input.addEventListener('input', (event) =>
            updateRangeInput(event.target)
        );
        updateRangeInput(input);
    });
}

main();
