const starRating = () => {
    $(function(){
        $('.rate-Yo').rateYo({
            starWidth: "10px",
            normalFill: "#f2f2f2",
            ratedFill: "#333333",
            spacing: "2px",
            readOnly: true,
            starSvg: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.315L5 0L3.595 3.315L0 3.62L2.73 5.985L1.91 9.5L5 7.635Z"/>
                     </svg>`
        });
    });
};

export default starRating;