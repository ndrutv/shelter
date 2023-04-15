const modal = async (slides, id) => {    
    const slidesInoculations = slides[id].inoculations.join(', ');
    const slidesDiseases = slides[id].diseases.join(', ');
    const slidesParasites = slides[id].parasites.join(', ');
    const petsList = document.querySelector('.pets__list');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__inner">
            <div class="modal__image-container">
                <img class="modal__image"
                    src="${ petsList ? '.' + slides[id].img : slides[id].img }"
                    alt="${ slides[id].name }">
            </div>
            <div class="modal__content">
                <h3 class="modal__title">${ slides[id].name }</h3>
                <h4 class="modal__subtitle">${ slides[id].type } - ${ slides[id].breed }</h4>
                <div class="modal__description">${ slides[id].description }</div>
                <ul class="modal__list">
                    <li class="modal__item">
                        <span class="modal__bold">Age:</span> ${ slides[id].age }
                    </li>
                    <li class="modal__item">
                        <span class="modal__bold">Inoculations:</span> ${ slidesInoculations }
                    </li>
                    <li class="modal__item">
                        <span class="modal__bold">Diseases:</span> ${ slidesDiseases }
                    </li>
                    <li class="modal__item">
                        <span class="modal__bold">Parasites:</span> ${ slidesParasites }
                    </li>
                </ul>
            </div>
            <div class="btn_rounded modal__close">&times;</div>
        </div>
        `
    document.body.append(modal);

    const scrollWidth = window.screen.width - document.body.clientWidth;

    if ( !document.body.style.overflow ) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'relative';
        scrollWidth !== 0 ? document.body.style.marginRight = `${scrollWidth}px` : null;
    }

    const overlay = document.querySelector('.overlay');
    overlay.classList.add('overlay_active');

    const close = () => {
        overlay.classList.remove('overlay_active');
        modal.remove();
        document.body.style = '';
    }

    const modalClose = document.querySelector('.btn_rounded');
    modalClose.addEventListener('click', () => {
        close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') { 
            close();
        }
    });

    document.querySelector('.modal').addEventListener('click', (e) => {
        e.target === e.currentTarget ? close() : null;
    })
}

export default modal;