var swiper = new Swiper(".review__list", {
    slidesPerView: 3.5, /* 3 полных + половина 4-го */
    spaceBetween: 31, /* Расстояние между слайдами */
    freeMode: true,
    grabCursor: true,
});
var swiper__img = new Swiper(".master__slider", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
$(function (){
    $('.tabs__item').on('click',function (){
        $('.tabs__item').removeClass('tabs__item--active')
        $('.tab__content').removeClass('tab__content--active')
        $(this).addClass('tabs__item--active');
        let index=  $(this).index();
        $('.tab__content').eq(index).addClass('tab__content--active');
    });
    $('.btn__tips').on('click',function (){
        $('#leaveTips').addClass('m-modal--active');
        $('html').addClass('m-modal--shown');
    })
    $('.js-modal-close').on('click',function (){
        $('.m-modal').removeClass('m-modal--active');
        $('html').removeClass('m-modal--shown');
    })
    $('.btn__like').on('click',function (){
        $(this).toggleClass('btn__like--active')
        $('#likeMaster').addClass('m-modal--active');
        $('html').addClass('m-modal--shown');
    });
    $('.btn__toggle').on('click',function (){
        $('#mobile-menu').addClass('m-modal--active');
        $('html').addClass('m-modal--shown');
    });
    $('.btn__dislike').on('click',function (){
        $(this).toggleClass('btn__like--active')
        $('#dislikeMaster').addClass('m-modal--active');
        $('html').addClass('m-modal--shown');
    })
})