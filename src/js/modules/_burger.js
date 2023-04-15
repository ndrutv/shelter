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

export default burger;