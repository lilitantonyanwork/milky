var swiper = new Swiper(".review__list", {
    slidesPerView: 3.5, /* 3 полных + половина 4-го */
    spaceBetween: 31, /* Расстояние между слайдами */
    freeMode: true,
    grabCursor: true,
    breakpoints: {
        600:{
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
    }
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
    });
    $('.btn__info').on('click',function (e){
        e.preventDefault();
        $('#aboutInfo').addClass('m-modal--active');
        $('html').addClass('m-modal--shown');
    });
    $('.master__tags--item-more').on('click',function (){
        $('.master__tags--item').css('display', 'flex');
        $(this).hide();

    })
    $('.mobile-review__img--count').on('click',function (){
        console.log('aaaaa')
        $('.master__info').addClass('hidden');
        $('.master-about').addClass('hidden');
        $('.master__inner > .btn__back').addClass('hidden');
        $('.graphic').addClass('hidden');
        $('.blitz').addClass('hidden');
        $('.review').show();
        $('.mobile-review').addClass('active')
    })
    $('.mobile-review__title .btn__back').on('click',function (){
        $('.master__info').removeClass('hidden');
        $('.master-about').removeClass('hidden');
        $('.master__inner > .btn__back').removeClass('hidden');
        $('.graphic').removeClass('hidden');
        $('.blitz').removeClass('hidden');
        $('.review').hide();
        $('.mobile-review').removeClass('active')
    });
    $('.btn__review').on('click', function (e){
        e.preventDefault();
        $('.review').hide();
        $('.gallery').show();
        $('.gallery').addClass('active');
        $('.mobile-review ').addClass('hidden').removeClass('active');

    });
    $('.gallery .btn__back').on('click',function (e){
        e.preventDefault();
        $('.review').show();
        $('.gallery').hide();
        $('.gallery').removeClass('active');
        $('.mobile-review ').addClass('active').removeClass('hidden');
    })

        if( $(window).width() < 769){
            console.log('aaasdasd')
            swiper.destroy(true, true)
        }

})
