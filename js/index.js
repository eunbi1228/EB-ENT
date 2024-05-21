$(function(){
    /* sec01 main-slide 이벤트 */
    const swiper01 = new Swiper('.swiper', {
        // Optional parameters
        loop:true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /* sec02 sub-slide 이벤트 */
    const swiper02 = new Swiper('.swiper02', {
        // Optional parameters
        loop:true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})