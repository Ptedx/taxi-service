document.addEventListener('DOMContentLoaded', ()=>{
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay:{
            delay: 2500,
            disableOnInteration: false,
        }
    })
})