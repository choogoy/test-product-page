const resize = () => {
    window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;
        const menu = document.querySelector('.menu');

        if (currentWidth > 700 && menu.classList.contains('menu--active')) {
            menu.classList.remove('menu--active');
        }
    });
};

export default resize;