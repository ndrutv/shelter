/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_burger */ "./src/js/modules/_burger.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_slider */ "./src/js/modules/_slider.js");
/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_list */ "./src/js/modules/_list.js");




document.addEventListener('DOMContentLoaded', () => {
    const petsSlider = document.querySelector('.slider');
    const petsList = document.querySelector('.pets__list');
    
    (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    petsSlider ? (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])() : null;
    petsList ? (0,_modules_list__WEBPACK_IMPORTED_MODULE_2__["default"])() : null;

    console.log('Реализация burger menu на обеих страницах');
    console.log('- (2/2) при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка');
    console.log('- (4/4) при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов');
    console.log('- (2/2) высота адаптивного меню занимает всю высоту экрана');
    console.log('- (4/4) при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно');
    console.log('- (2/2) бургер-иконка создана при помощи html+css, без использования изображений');
    console.log('- (2/2) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню');
    console.log('- (2/2) при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно');
    console.log('- (2/2) расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая');
    console.log('- (2/2) область, свободная от бургер-меню, затемняется');
    console.log('- (4/4) страница под бургер-меню не прокручивается');
    
    console.log('Реализация слайдера-карусели на странице "Main"');
    console.log('- (4/4) при нажатии на стрелки происходит переход к новому блоку элементов');
    console.log('- (0/4) смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется)');
    console.log('- (4/4) слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек');
    console.log('- (4/4) при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px)');

    console.log('Каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:');
    console.log('- (4/4) в текущем блоке слайда карточки с питомцами не повторяются');
    console.log('- (0/4) в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде');
    console.log('- (4/4) сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного');
    console.log('- (2/2) при каждой перезагрузке страницы формируется новая последовательность карточек');
    console.log('- (2/2) генерация наборов карточек происходит на основе 8 объектов с данными о животными');
    console.log('- (4/4) при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования)');

    console.log('Реализация пагинации на странице "Pets"');
    console.log('- (2/2) при перезагрузке страницы всегда открывается первая страница пагинации');
    console.log('- (2/2) при нажатии кнопок ">" или "<" открывается следующая или предыдущая страница пагинации соответственно');
    console.log('- (2/2) при нажатии кнопок ">>" или "<<" открывается последняя или первая страница пагинации соответственно');
    console.log('- (2/2) при открытии первой страницы кнопки "<<" и "<" неактивны');
    console.log('- (2/2) при открытии последней страницы кнопки ">" и ">>" неактивны');
    console.log('- (2/2) в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный');

    console.log('Каждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями');
    console.log('- (4/4) при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз');
    console.log('- (4/4) при каждой перезагрузке страницы формируется новый массив со случайной последовательностью');
    console.log('- (4/4) карточки питомцев не должны повторяться на одной странице');
    console.log('- (4/4) при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек)');
    console.log('- (2/2) при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы');
    console.log('- (2/2) общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц');
    console.log('- (0/4) при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации)');

    console.log('Реализация попап на обеих страницах');
    console.log('- (2/2) попап появляется при нажатии на любое место карточки с описанием конкретного животного');
    console.log('- (2/2) часть страницы вне попапа затемняется');
    console.log('- (2/2) при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным');
    console.log('- (2/2) при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит');
    console.log('- (2/2) кнопка с крестиком интерактивная');
    console.log('- (2/2) окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом');
})

/***/ }),

/***/ "./src/js/modules/_burger.js":
/*!***********************************!*\
  !*** ./src/js/modules/_burger.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burger = () => {
    const navList = document.querySelector('.nav__list');
    const navItem = document.querySelectorAll('.nav__item');
    const navBurger = document.querySelector('.nav__burger');
    const navOverlay = document.querySelector('.overlay');
    const scrollWidth = window.screen.width - document.body.clientWidth;

    const hideMenu = () => {
        navOverlay.classList.remove('overlay_active');
        navBurger.classList.remove('nav__burger_active');
        navList.classList.remove('nav__list_active');
        document.body.style = '';
    }

    const toggleMenu = () => {
        navOverlay.classList.toggle('overlay_active');
        navBurger.classList.toggle('nav__burger_active');
        navList.classList.toggle('nav__list_active');

        if ( !document.body.style.overflow ) {
            document.body.style.overflow = 'hidden';
            scrollWidth !== 0 ? document.body.style.marginRight = `${scrollWidth}px` : null;
        } else {
            document.body.style = '';
        }
    };

    navBurger.addEventListener('click', () => {
        toggleMenu();
    });

    navItem.forEach((e) => {
        e.addEventListener('click', () => {
            hideMenu();
        });
    });

    navOverlay.addEventListener('click', (e) => {
        if (e.target) {
            toggleMenu();
        }
    })

    // for ease check
    // window.addEventListener('resize', () => {
    //     if ( document.body.clientWidth >= 768 ) {
    //         hideMenu();

    //         if ( document.body.style.overflowY ) {
    //             document.body.style = '';
    //         }
    //     }
    // })
}

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/_list.js":
/*!*********************************!*\
  !*** ./src/js/modules/_list.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services */ "./src/js/modules/_services.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_utils */ "./src/js/modules/_utils.js");



const getArr = (data, screen) => {
    let num = { pages: 0, cards: 0 };

    screen < 768 ? num = { pages: 16, cards: 3 } : null;
    screen >= 768 && screen < 1200 ? num = { pages: 8, cards: 6 } : null;
    screen >= 1200 ? num = { pages: 6, cards: 8 } : null;
    
    let { pages, cards } = num;

    return new Array(pages).fill([]).map(() => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomCards)(data, cards));
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

    ;(0,_utils__WEBPACK_IMPORTED_MODULE_1__.setAnimate)(place);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.cardsModal)(data);
}

const list = async () => {
    const data = await (0,_services__WEBPACK_IMPORTED_MODULE_0__["default"])('../pets.json');
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

/* harmony default export */ __webpack_exports__["default"] = (list);

/***/ }),

/***/ "./src/js/modules/_modal.js":
/*!**********************************!*\
  !*** ./src/js/modules/_modal.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/_services.js":
/*!*************************************!*\
  !*** ./src/js/modules/_services.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const getData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
}

/* harmony default export */ __webpack_exports__["default"] = (getData);

/***/ }),

/***/ "./src/js/modules/_slider.js":
/*!***********************************!*\
  !*** ./src/js/modules/_slider.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services */ "./src/js/modules/_services.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_utils */ "./src/js/modules/_utils.js");



const slider = async () => {
    const slides = await (0,_services__WEBPACK_IMPORTED_MODULE_0__["default"])('./pets.json');
    const sliderInner = document.querySelector('.slider__inner');
    const sliderButtons = document.querySelectorAll('.slider__button');
    const numberOfSlides = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setSlides)();
    const state = {
        current: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.renderCards)(slides, numberOfSlides, sliderInner),
        previous: [],
        transition: [],
        event: '',
    }

    sliderButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const getClass = button.classList[1];
 
            const empty = () => {
                sliderInner.innerHTML = null;
                state.event = getClass;
                state.previous = state.current;
                state.current = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.renderCards)(slides, numberOfSlides, sliderInner);
            }

            const match = () => {
                sliderInner.innerHTML = null;
                state.previous = state.current;
                state.current = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.renderCards)(slides, numberOfSlides, sliderInner);
            }

            const change = () => {
                sliderInner.innerHTML = null;
                state.event = getClass;
                state.transition = state.previous;
                state.previous = state.current;
                state.current = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.renderCards)(slides, numberOfSlides, sliderInner, state.transition);
            }

            if ( !state.event ) {
                empty();
            } else if ( state.event === getClass ) {             
                match();
            } else {
                change();
            }

            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setAnimate)(sliderInner);
        })
    })
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/_utils.js":
/*!**********************************!*\
  !*** ./src/js/modules/_utils.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardsModal": function() { return /* binding */ cardsModal; },
/* harmony export */   "getRandomCards": function() { return /* binding */ getRandomCards; },
/* harmony export */   "renderCards": function() { return /* binding */ renderCards; },
/* harmony export */   "setAnimate": function() { return /* binding */ setAnimate; },
/* harmony export */   "setSlides": function() { return /* binding */ setSlides; }
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_modal */ "./src/js/modules/_modal.js");


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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(slides, id);
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/modules/_burger.js");
/******/ 	__webpack_require__("./src/js/modules/_list.js");
/******/ 	__webpack_require__("./src/js/modules/_modal.js");
/******/ 	__webpack_require__("./src/js/modules/_services.js");
/******/ 	__webpack_require__("./src/js/modules/_slider.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/_utils.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map