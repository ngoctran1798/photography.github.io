$('#block-slider-main').slick({
    autoplay: false,
    arrows: false,
    dots: true,
});
$('.block-review-slider').slick({
    autoplay: false,
    arrows: true,
    dots: false,
});

$('document').ready(function() {
    var header = $(".box-header");
    $(window)['resize'](function() {
        if ($(window)['width']() < 991) {
            $('body').scroll(function() {
                var scroll = $('body').scrollTop();
                if (scroll >= 10) {
                    header.addClass("show-header");
                } else {
                    header.removeClass("show-header");
                }
            });
        }
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            header.addClass("show-header");
        } else {
            header.removeClass("show-header");
        }
    });
});


$(document).ready(function() {
    $('.block-widget-title > ul > li > a').click(function(e) {
        e.preventDefault();
        $('.block-widget-title li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if (checkElement.is('ul') && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if (checkElement.is('ul') && (!checkElement.is(':visible'))) {
            $('.block-widget-title ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });

    $('.block-widget-title ul li').each(function() {
        if ($(this).find('.sub-v-menu').hasClass('sub-v-menu')) {
            $(this).addClass('has-sub');
        }
    });
});

jQuery(document).ready(function($) {
    $('.btn-minus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('.block-quality').find('.form-control');
        var value = parseInt($input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 1;
        }
        $input.val(value);
    });
    $('.btn-plus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('.block-quality').find('.form-control');
        var value = parseInt($input.val());
        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);
    });
});

var mzOptions = {
    zoomMode: true,
    onExpandClose: function() { MagicZoom.refresh(); }
};
/*------------------------------------ Single Product */
(function($) {
    $('.slider-thumbnail-navigation').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: false,
        responsive: [{
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})(jQuery);

function collapse() {
    var category = $(".block-products-inner");
    var category_one = $(".block-widget-title");
    if ($(window).width() < 991) {
        category.addClass("collapse");
        category_one.removeClass("collapse").addClass("collapse show");
    } else {
        category.removeClass("collapse");
    }
}
$(window).resize(function() {
    collapse();
});



$(window).on("load", function(e) {
    $('.grid-row').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item-sizer',
            gutter: 20
        }
    });

    $('.block-review-slider').slick({
        autoplay: false,
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 1,
    });
})