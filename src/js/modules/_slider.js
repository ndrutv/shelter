import getData from './_services';
import { renderCards, setSlides, setAnimate } from './_utils';

const slider = async () => {
    const slides = await getData('./pets.json');
    const sliderInner = document.querySelector('.slider__inner');
    const sliderButtons = document.querySelectorAll('.slider__button');
    const numberOfSlides = setSlides();
    const state = {
        current: renderCards(slides, numberOfSlides, sliderInner),
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
                state.current = renderCards(slides, numberOfSlides, sliderInner);
            }

            const match = () => {
                sliderInner.innerHTML = null;
                state.previous = state.current;
                state.current = renderCards(slides, numberOfSlides, sliderInner);
            }

            const change = () => {
                sliderInner.innerHTML = null;
                state.event = getClass;
                state.transition = state.previous;
                state.previous = state.current;
                state.current = renderCards(slides, numberOfSlides, sliderInner, state.transition);
            }

            if ( !state.event ) {
                empty();
            } else if ( state.event === getClass ) {             
                match();
            } else {
                change();
            }

            setAnimate(sliderInner);
        })
    })
}

export default slider;