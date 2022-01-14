const mobileMenu = () => {
    const wrapper = document.querySelector('.wrapper');
    const menu = document.querySelector('.menu');

    const handlerMenu = () => menu.classList.toggle('menu--active');

    wrapper.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.header__btn')) {
            handlerMenu();
        } else if (menu.classList.contains('menu--active') && !target.closest('.menu')) {
            handlerMenu();
        }

        if (target.closest('.menu__close-btn')) {
            handlerMenu();
        }
    });
};

export default mobileMenu;