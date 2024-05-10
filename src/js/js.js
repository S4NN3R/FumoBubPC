$(document).ready(function() {
    initSwiper();
    initScrollHandler();
    toggleSwiperInfoContent(); // Добавлен вызов функции для переключения отображения swiper-info-content при загрузке страницы
    toggleIm01Brightness(); // Добавлен вызов функции для переключения яркости элемента im01 при загрузке страницы
    $(window).resize(function() {
        toggleSwiperInfoContent(); // Добавлен обработчик изменения размера окна браузера для переключения отображения swiper-info-content при изменении ширины окна
        toggleIm01Brightness(); // Добавлен обработчик изменения размера окна браузера для переключения яркости элемента im01 при изменении ширины окна
    });
});

function initSwiper() {
    new Swiper(".home-main-right-swiper", {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        effect: 'fade', // Эффект затемнения
        fadeEffect: {
            crossFade: true
        }
    });
}

function toggleSwiperInfoContent() {
    if ($(window).width() < 1200 || $(window).height() < 500) {
        $(".swiper-info-content").css("display", "none"); // Если ширина окна меньше 1200px или высота экрана меньше 500px, скрываем swiper-info-content
    } else {
        $(".swiper-info-content").css("display", "flex"); // Если ширина окна больше или равна 1200px и высота экрана больше или равна 500px, отображаем swiper-info-content как flex
    }
}

function toggleIm01Brightness() {
    if ($(window).width() < 1200 || $(window).height() < 500) {
        $(".im01").css("filter", "brightness(100%)"); // Если ширина окна меньше 1200px или высота экрана меньше 500px, применяем стиль filter: brightness(75%)
    } else {
        $(".im01").css("filter", "brightness(75%)"); // Если ширина окна больше или равна 1200px и высота экрана больше или равна 500px, применяем стиль filter: brightness(100%)
    }
}


function initScrollHandler() {
    window.onscroll = function() {
        if (window.pageYOffset >= 100) {
            $("nav.navbar").addClass("navbar-fixed");
        } else {
            $("nav.navbar").removeClass("navbar-fixed");
        }
    }
}

