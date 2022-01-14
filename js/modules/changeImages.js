const changeImages = () => {
    const mainImg = document.querySelector('.product__main-img');
    const miniImages = document.querySelector('.product__mini-images');
    
    miniImages.addEventListener('click', event => mainImg.src = event.target.src);
};

export default changeImages;