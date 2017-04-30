
$(function () {
    //$(document).ready(function () {
    //    var imgHeight = $('.content-primary-image').height();
    //    $('.contentPrimaryImageWrapper').css('padding-bottom', imgHeight);
    //})


    $(document).ready(function () {
        var scrollTop = $(document).scrollTop();
        var scrollOff = scrollTop * .3;
        var about;
        if (scrollTop < 350) {
            $('.header-title').css('transform', 'translateY(' + scrollTop + 'px)');
            $('.header-subtitle').css('transform', 'translateY(' + scrollTop + 'px)');
        }
    })

    $(document).scroll(function () {
        if ($(window).width() > 768) {
            var scrollTop = $(document).scrollTop();
            var scrollOff = scrollTop * .3;
            var about;
            if (scrollTop < 350)
            {
                $('.header-title').css('transform', 'translateY(' + scrollTop + 'px)');
                $('.header-subtitle').css('transform', 'translateY(' + scrollTop + 'px)');
            }
            //$('.header-image').css('transform', 'translateY(-' + scrollOff + 'px)');

           //$('.no-scroll').css('transform', 'translateY(' + scrollOff * 2.333 + 'px)');
        }
    })
    $(window).resize(function () {
        if ($(window).width() > 768) {
            var scrollTop = $(document).scrollTop();
            var scrollOff = scrollTop * .3;
            //$('.header-image').css('transform', 'translateY(-' + scrollOff + 'px)');
            $('.header-text').css('transform', 'translateY(-' + scrollOff * 2.333 + 'px)');
            $('.header-title').css('transform', 'translateY(-' + scrollOff * 2.333 + 'px)');
            $('.header-subtitle').css('transform', 'translateY(-' + scrollOff * 2.333 + 'px)');
            //$('#Header').css('transform', 'translateY(' + scrollOff * 2.333 + 'px)');
        }
    })

    $('.burger-icon').click(function () {
        if ($('.mobile-navigation-menu').hasClass('closed'))
        {
            $('.mobile-navigation-menu').removeClass('closed').addClass('open');
        }
        else {
            $('.mobile-navigation-menu').addClass('closed').removeClass('open');
        }
    })
})
