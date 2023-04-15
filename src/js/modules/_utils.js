import modal from './_modal';

const getRandomCards = (data, count, arr = []) => {
    do {
        let num = Math.floor(Math.random() * data.length);
        arr.indexOf(num) === -1 ? arr.push(num) : null;
    } while (arr.length < count);

    return arr;
}

const cardsModal = (slides) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((e) => {
        e.addEventListener('click', () => {
            const id = e.getAttribute('data-id');
            modal(slides, id);
        })
    })
}

const renderCards = (slides, count, place, arr = []) => {
    arr.length === 0 ? getRandomCards(slides, count, arr) : null;

    arr.forEach((e) => {
        const card = document.createElement('div')
        card.className = 'card';
        card.setAttribute('data-id', e);
        card.innerHTML = `
            <img class="card__image" src="${slides[e].img}" alt="${slides[e].name}">
            <div class="card__title">${slides[e].name}</div>
            <button class="btn btn_secondary card__btn">Learn more</button>
        `
        place.append(card);
    })

    cardsModal(slides);

    return arr;
}

const setSlides = () => {
    const width = document.body.clientWidth;

    let quantity = 0;
    width < 768 ? quantity = 1 : null;
    width >= 768 && width < 1200 ? quantity = 2 : null;
    width >= 1200 ? quantity = 3 : null;

    return quantity;
}

const setAnimate = (e) => {
    e.animate([
        {opacity: '0'},
        {opacity: '1'}
    ], 300);
}

export { getRandomCards, cardsModal, renderCards, setSlides, setAnimate }