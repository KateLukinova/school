$(document).ready(function () {
    
    $.get( "https://intelligent-mandarine-59881.herokuapp.com/api/v0/testimonials", function( data ) {
        for (let i = 0; i < data.data.testimonials.length; i++) {
            $('.reviews-carousel').append(`
            <div class="reviews-carousel__item">
                <div class="review">
                    «${data.data.testimonials[i].body}»
                </div>
                <h2 class="review-author">
                    ${data.data.testimonials[i].name} <span>//</span>
                </h2>
            </div>
            `);
        }

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

    });

    $.get( "https://intelligent-mandarine-59881.herokuapp.com/api/v0/albums", function( data ) {
        console.log(data.data.albums)
        var fourthClass = data.data.albums.filter(x => x.klass_number == 4);

        for (let i = 0; i < fourthClass.length; i++){
            $('#gallery-4').append(`
             <div class="gallery-carousel__item">
                <div class="number-carousel-box">
                    <div class="number-slide gallery-item-number"></div>
                    <div class="current-items gallery-length-4"></div>
                </div>
                <div class="gallery-carousel-img">
                    <img src="https://intelligent-mandarine-59881.herokuapp.com/${fourthClass[i].cover.url}" alt="">
                </div>
                <div class="gallery-item__info">
                    <p class="class">${fourthClass[i].title}</p>
                    <p class="book-type">
                        Книга: <span>${fourthClass[i].book_type}</span>
                    </p>
                </div>
                <a href="#" class="gallery-btn">
                    Смотреть все фото
                    <img src="img/link-arrow.png" alt="">
                </a>
             </div>
            `)
        }

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

    });

    $.get( "https://intelligent-mandarine-59881.herokuapp.com/api/v0/albums", function( data ) {
        console.log(data.data.albums)
        var ninthClass = data.data.albums.filter(x => x.klass_number == 9);

        for (let i = 0; i < ninthClass.length; i++){
            $('#gallery-9').append(`
             <div class="gallery-carousel__item">
                <div class="number-carousel-box">
                    <div class="number-slide gallery-item-number"></div>
                    <div class="current-items gallery-length-9"></div>
                </div>
                <div class="gallery-carousel-img">
                    <img src="https://intelligent-mandarine-59881.herokuapp.com/${ninthClass[i].cover.url}" alt="">
                </div>
                <div class="gallery-item__info">
                    <p class="class">${ninthClass[i].title}</p>
                    <p class="book-type">
                        Книга: <span>${ninthClass[i].book_type}</span>
                    </p>
                </div>
                <a href="#" class="gallery-btn">
                    Смотреть все фото
                    <img src="img/link-arrow.png" alt="">
                </a>
             </div>     
            `)
        }

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




    });

    $.get( "https://intelligent-mandarine-59881.herokuapp.com/api/v0/albums", function( data ) {
        console.log(data.data.albums)
        var eleventhClass = data.data.albums.filter(x => x.klass_number == 11);

        for (let i = 0; i < eleventhClass.length; i++){
            $('#gallery-11').append(`
              <div class="gallery-carousel__item">
                <div class="number-carousel-box">
                    <div class="number-slide gallery-item-number"></div>
                    <div class="current-items gallery-length-11"></div>
                </div>
                <div class="gallery-carousel-img">
                    <img src="https://intelligent-mandarine-59881.herokuapp.com/${eleventhClass[i].cover.url}" alt="">
                </div>
                <div class="gallery-item__info">
                    <p class="class">${eleventhClass[i].title}</p>
                    <p class="book-type">
                        Книга: <span>${eleventhClass[i].book_type}</span>
                    </p>
                </div>
                <a href="#" class="gallery-btn">
                    Смотреть все фото
                    <img src="img/link-arrow.png" alt="">
                </a>
              </div>
            `)
        }


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
    });

    //smooth scroll

    $(function(){
        $('.packages-item a[href^="#"]').on('click', function(event) {

            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;

            $('html, body').animate({scrollTop: dn}, 1000);

        });
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 10){
            $('.sale-info-box').css('transform', 'translateY(-100%)');
            $('header').css('top', '0')
        } else {
            $('.sale-info-box').css('transform', 'translateY(0)');
            $('header').css('top', '40px')
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
    });

    $("#gallery-4-link").on("click", function() {

        $('.tabs__content').removeClass('active');
        $('#tabs-gallery-4').addClass('active')

        $('.tabs__caption li').removeClass('active')
        $('#tab-nav-4').addClass('active')
    })

    $("#gallery-9-link").on("click", function() {

        $('.tabs__content').removeClass('active');
        $('#tabs-gallery-9').addClass('active')

        $('.tabs__caption li').removeClass('active')
        $('#tab-nav-9').addClass('active')
    })

    $("#gallery-11-link").on("click", function() {

        $('.tabs__content').removeClass('active');
        $('#tabs-gallery-11').addClass('active')

        $('.tabs__caption li').removeClass('active')
        $('#tab-nav-11').addClass('active')
    })

    //form reviews
    $('#review-form').on('submit', function (e) {
        e.preventDefault();
        $.post( "https://intelligent-mandarine-59881.herokuapp.com/api/v0/testimonials", {
            name: $('#form-name').val(),
            body: $('#review-text').val()
        } )
            .done(function() {
                $('#review-form-block').css('display', 'none')
                $('.modal-ok').addClass('show')
            })
            .fail(function() {
                alert( "error" );
            });
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





