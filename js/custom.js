
$(function () {
    /*메뉴 펴주는 일 할거다. slideDown 펴지는 명령!!! 어렵다!!*/
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on')
        /*active를 붙여도 된다. 일반적으로는 on 사용한다.*/
        $('#header h1').toggleClass('on')
    })
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            /*if는 이렇게 했을 때 작동한다.&& rmflrh*/
            e.preventDefault();
            /*preventDefault 이벤트 자체를 막는다.*/
            $('.gnb>ul>li ul').stop().slideUp();
            /*내가 누른거 외에는 접고 열린다.*/
            $(this).next().stop().slideToggle();
            /* slideToggle열린거닫게한다. */
        };
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        };
    });
});



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
    const swiper = new Swiper('.main_collection_right', {
        direction: 'vertical',
        loop: true,
        mousewheel: true,
        slidesPerView: 2.5,
        spaceBetween: 40,
        scrollbar: {
            el: '.swiper-scrollbar', // 스크롤바 위치 지정
            draggable: true, // 드래그 가능하도록 설정
        },

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