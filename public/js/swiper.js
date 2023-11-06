document.addEventListener('DOMContentLoaded', ()=>{
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay:{
            delay: 3000,
            disableOnInteration: false,
        },
        breakpoints: {
            535:{
                slidesPerView:2,
            },
            992:{
                slidesPerView:3,
            }
        }
    })
})
