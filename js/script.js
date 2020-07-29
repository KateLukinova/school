$(document).ready(function () {
    
    // $.get( "https://intelligent-mandarine-59881.herokuapp.com/api/v0/contacts", function( data ) {
    //     console.log(data)
    // });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150){
            $('.sale-info-box').css('transform', 'translateY(-100%)');
            $('header').css('top', '0')
        }
    }).trigger('scroll');

    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $('.close-button').on('click', function () {
        $('.sale-info-box').slideUp();
        return false;
    });


    //portfolio carousel
    var portfolioSlidesCount = $('.case').length;

    $('#items-portfolio').text('/0' + portfolioSlidesCount);
    updateCurrentSlideNumber('item-portfolio', 1);

    $('.cases').owlCarousel({
        nav:true,
        navText : ["<img src=\"img/arrow-left-black.png\" alt=\"\" id=\"portfolio-btn-prev\">", "<img src=\"img/arrow-right-black.png\" alt=\"\" id=\"portfolio-btn-next\">"],
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                navText : ["<img src=\"img/arrow-left-black.png\" alt=\"\" id=\"portfolio-btn-prev\">", "<img src=\"img/arrow-right-black.png\" alt=\"\" id=\"portfolio-btn-next\">"],
            },
            765:{
                items: 1,
                navText : ["<img src=\"img/arrow-right.png\" alt=\"\" id=\"portfolio-btn-prev\">", "<img src=\"img/arrow-left.png\" alt=\"\" id=\"portfolio-btn-next\">"],
            }
        },
        onChanged: (event) => {
            updateCurrentSlideNumber('item-portfolio', event.item.index + 1);
        }
    });

    //reviews carousel
    var reviewSlidesCount = $('.reviews-carousel__item').length;

    $('#items-review').text('/0' + reviewSlidesCount);
    updateCurrentSlideNumber('item-review', 1);

    $('.reviews-carousel').owlCarousel({
        nav: false,
        dots: false,
        arrows: false,
        responsiveClass:false,
        margin: 50,
        items: 1,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',

        onChanged: (event) => {
            updateCurrentSlideNumber('item-review', event.item.index + 1);
        }
    });

    $('#next-slide-review').on('click', function(){
        $('.reviews-carousel').trigger('next.owl.carousel');
    });

    $('#prev-slide-review').on('click', function(){
        $('.reviews-carousel').trigger('prev.owl.carousel');
    });

    //gallery-carousel-4
    var gallerySlidesCount = $('#gallery-4 .gallery-carousel__item').length;

    $('#items-gallery-4').text('/0' + gallerySlidesCount);
    updateCurrentSlideNumber('item-gallery-4', 1);

    $('.gallery-length-4').text('/0' + gallerySlidesCount);
    updateCurrentSlideNumber('item-gallery-4', 1);

    $('#gallery-4').owlCarousel({
        nav:false,
        responsiveClass:true,
        margin: 90,
        loop: false,

        responsive:{
            0:{
                items: 1,
                margin: 0,
            },
            765:{
                items: 2,
                margin: 30
               },
            990:{
                items: 3,
                margin: 50
            },
            1366:{
                items: 3,
                margin: 90
            }
        },
        onChanged: (event) => {
            var itemsLastIndex = event.item.count - 3;
            var current = event.item.index;
            $(event.target).find(".owl-item").eq(current).find('.number-slide').text(current + 1);
            $(event.target).find(".owl-item").eq(current + 1).find('.number-slide').text(current + 2);
            $(event.target).find(".owl-item").eq(current + 2).find('.number-slide').text(current + 3);
            updateCurrentSlideNumber('item-gallery-4', current <= itemsLastIndex ? current + 1 : current);
        }
    });

    $('#next-slide-gallery-4').on('click', function(){
        $('#gallery-4').trigger('next.owl.carousel');
    });

    $('#prev-slide-gallery-4').on('click', function(){
        $('#gallery-4').trigger('prev.owl.carousel');
    });

    //gallery-carousel-9
    var gallerySlidesCount9 = $('#gallery-9 .gallery-carousel__item').length;

    $('#items-gallery-9').text('/0' + gallerySlidesCount9);
    updateCurrentSlideNumber('item-gallery-9', 1);

    $('.gallery-length-9').text('/0' + gallerySlidesCount9);
    updateCurrentSlideNumber('item-gallery-9', 1);

    $('#gallery-9').owlCarousel({
        nav:false,
        responsiveClass:true,
        margin: 90,
        responsive:{
            0:{
                items: 1,
                margin: 0,
            },
            765:{
                items: 2,
                margin: 30
            },
            990:{
                items: 3,
                margin: 50
            },
            1366:{
                items: 3,
                margin: 90
            }
        },
        onChanged: (event) => {
            var current = event.item.index;
            $(event.target).find(".owl-item").eq(current).find('.number-slide').text(current + 1);
            $(event.target).find(".owl-item").eq(current + 1).find('.number-slide').text(current + 2);
            $(event.target).find(".owl-item").eq(current + 2).find('.number-slide').text(current + 3);
            updateCurrentSlideNumber('item-gallery-9', event.item.index + 1);
        }
    });

    $('#next-slide-gallery-9').on('click', function(){
        $('#gallery-9').trigger('next.owl.carousel');
    });

    $('#prev-slide-gallery-9').on('click', function(){
        $('#gallery-9').trigger('prev.owl.carousel');
    });


    //gallery-carousel-11
    var gallerySlidesCount11 = $('#gallery-11 .gallery-carousel__item').length;

    $('#items-gallery-11').text('/0' + gallerySlidesCount11);
    updateCurrentSlideNumber('item-gallery-11', 1);

    $('.gallery-length-11').text('/0' + gallerySlidesCount11);
    updateCurrentSlideNumber('item-gallery-11', 1);

    $('#gallery-11').owlCarousel({
        nav:false,
        responsiveClass:true,
        margin: 90,
        responsive:{
            0:{
                items: 1,
                margin: 0,
            },
            765:{
                items: 2,
                margin: 30
            },
            990:{
                items: 3,
                margin: 50
            },
            1366:{
                items: 3,
                margin: 90
            }
        },
        onChanged: (event) => {
            var current = event.item.index;
            $(event.target).find(".owl-item").eq(current).find('.number-slide').text(current + 1);
            $(event.target).find(".owl-item").eq(current + 1).find('.number-slide').text(current + 2);
            $(event.target).find(".owl-item").eq(current + 2).find('.number-slide').text(current + 3);
            updateCurrentSlideNumber('item-gallery-11', event.item.index + 1);
        }
    });

    $('#next-slide-gallery-11').on('click', function(){
        $('#gallery-11').trigger('next.owl.carousel');
    });

    $('#prev-slide-gallery-11').on('click', function(){
        $('#gallery-11').trigger('prev.owl.carousel');
    });




    // collapse
    $('.collapse-btn').on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().parent().find('.collapse-box').toggleClass('show');
    })


    //tabs
    $(function() {

        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");

            var galleryId = $('.tabs__content.active').find('.owl-carousel').attr('id');

            if (galleryId == 'gallery-4') {
                $("#nav-gallery-4").css('display', 'flex')
                $("#nav-gallery-9").css('display', 'none')
                $("#nav-gallery-11").css('display', 'none')
            } else if (galleryId == 'gallery-9'){
                $("#nav-gallery-4").css('display', 'none')
                $("#nav-gallery-9").css('display', 'flex')
                $("#nav-gallery-11").css('display', 'none')
            } else {
                $("#nav-gallery-4").css('display', 'none')
                $("#nav-gallery-9").css('display', 'none')
                $("#nav-gallery-11").css('display', 'flex')
            }
        });



        // $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        //     $(this)
        //         .addClass('active').siblings().removeClass('active')
        //         .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        // });
        //
        // var tabIndex = window.location.hash.replace('#tab','')-1;
        // if (tabIndex != -1) $('ul.tabs__caption li').eq(tabIndex).click();
        //
        // $('a[href*=#tab]').click(function() {
        //     var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
        //     $('ul.tabs__caption li').eq(tabIndex).click();
        // });
    });
});


function updateCurrentSlideNumber(elementId, number) {
    $('#' + elementId).text(number);
}

function reinitCarousel(carouselClass, startPosition, animateOutClass, animateInClass) {
    carousel = $('.' + carouselClass);

    carousel.data('owl.carousel').destroy();

    return carousel.owlCarousel({
        items: 1,
        startPosition: startPosition,
        animateOut: animateOutClass,
        animateIn: animateInClass,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });
}





