const scroll = () => {
    const header = document.querySelector('.header');

    document.body.addEventListener('scroll', () => {
        const topCoordinateElem = document.querySelector('.wrapper').getBoundingClientRect().top;

        let newOpacity = 1 + (topCoordinateElem / 100);

        if (newOpacity >= 0) {
            header.style.opacity = newOpacity;
            header.style.zIndex = 1;
        } else {
            header.style.opacity = 0;
            header.style.zIndex = -1;
        }
    });
};

export default scroll;