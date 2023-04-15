import getData from './_services';
import { cardsModal, setAnimate, getRandomCards } from './_utils';

const getArr = (data, screen) => {
    let num = { pages: 0, cards: 0 };

    screen < 768 ? num = { pages: 16, cards: 3 } : null;
    screen >= 768 && screen < 1200 ? num = { pages: 8, cards: 6 } : null;
    screen >= 1200 ? num = { pages: 6, cards: 8 } : null;
    
    let { pages, cards } = num;

    return new Array(pages).fill([]).map(() => getRandomCards(data, cards));
}

const renderPage = (data, pets, page, place) => {
    place.innerHTML = null;
    
    pets[page - 1].forEach((e) => {
        const card = document.createElement('div')
        card.className = 'card';
        card.setAttribute('data-id', e);
        card.innerHTML = `
            <img class="card__image" src=".${data[e].img}" alt="${data[e].name}">
            <div class="card__title">${data[e].name}</div>
            <button class="btn btn_secondary card__btn">Learn more</button>
        `
        place.append(card);
    })

    setAnimate(place);
    cardsModal(data);
}

const list = async () => {
    const data = await getData('../pets.json');
    const petsList = document.querySelector('.pets__list');
    const buttons = document.querySelectorAll('.btn_navigation');
    const active = document.querySelector('.btn_navigation_active');
    const screen = document.body.clientWidth;
    const pets = getArr(data, screen);
    let page = 1;

    renderPage(data, pets, page, petsList);

    const setDisable = (arr) => {
        arr.forEach((e) => {
            document.querySelector(`.${e}`).disabled = true;
        })
    }

    const setActive = (arr) => {
        arr.forEach((e) => {
            document.querySelector(`.${e}`).disabled = false;
        })
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const target = e.target.classList;
            
            target.contains('btn_navigation_first') ? page = 1 : null;
            target.contains('btn_navigation_prev') ? page-- : null;
            target.contains('btn_navigation_next') ? page++ : null;
            target.contains('btn_navigation_last') ? page = pets.length : null;

            page === 1 ? setDisable(['btn_navigation_first', 'btn_navigation_prev']) : null;
            page === pets.length ? setDisable(['btn_navigation_next', 'btn_navigation_last']) : null;
            page > 1 ? setActive(['btn_navigation_first', 'btn_navigation_prev']) : null;
            page < pets.length ? setActive(['btn_navigation_next', 'btn_navigation_last']) : null;

            active.textContent = page;

            renderPage(data, pets, page, petsList);
        })
    })
}

export default list;