
$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    });


});


$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        speed: 1000,
    });

});

$(function () {
    const main_mostlove_slide = new Swiper('.main_mostlove_slide', {

        slidesPerView: 1,
        spaceBetween: 30,
        /*breakpoints 반응형 됐을 때 이미지 하나 만들고 슬라이드 돌릴거다.*/
        loop: true,
        autoplay: {

            delay: 2500,
            disableOnInteraction: false,
        },


        breakpoints: {
            541: {
                /*541이상일때. slidesPerView 숫자 잘 적어야됨. */
                slidesPerView: 5,
                spaceBetween: 30,
                loop: true,
                autoplay: {

                    delay: 2500,
                    disableOnInteraction: false,
                },
            }
        },
        navigation: {
            nextEl: '.main_mostlove .arrows .next',
            prevEl: '.main_mostlove .arrows .prev',
        },
    });
});

$(function () {
    $('.main_product .tab_product button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_product .tab_product button').removeClass('on');
        $(this).addClass('on');

        $('.main_product .tab_product_content .con').removeClass('on');
        $('.main_product .tab_product_content .con').eq(idx).addClass('on');
    });
});