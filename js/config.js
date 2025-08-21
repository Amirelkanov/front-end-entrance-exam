import defaultConfig from './assets/defaultConfig.json';

async function applyContentFromConfig(config) {
    for (const [id, value] of Object.entries(config['text-elements-content'])) {
        const elem = document.getElementById(id);
        if (!elem) continue;
        if (value.items) {
            elem.innerHTML = '';
            for (const item of value.items) {
                const li = document.createElement('li');
                li.className = value.itemsClasses.join(' ');
                li.textContent = item;
                elem.appendChild(li);
            }
        } else {
            elem.textContent = value;
        }
    }

    document
        .querySelectorAll('.education-grid .education-item')
        .forEach((item, index) => {
            const liked = config['education-grid-items-liked'][index];
            if (liked) item.classList.add('accent-1');

            const likeButton = item.querySelector('.like-button');
            likeButton.innerHTML = `<i class="${liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
        });

    document
        .querySelectorAll('.language-level-inputs .input')
        .forEach((input) => {
            input.value = config['language-levels'][input.id];
        });
}

export async function loadInitialContent() {
    let config = localStorage.getItem('initialContentConfig');
    if (!config) {
        localStorage.setItem(
            'initialContentConfig',
            JSON.stringify(defaultConfig)
        );
        config = localStorage.getItem('initialContentConfig');
    }
    config = JSON.parse(config);

    await applyContentFromConfig(config);

    return config;
}
