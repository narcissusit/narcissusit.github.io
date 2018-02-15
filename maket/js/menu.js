$(document).on("scroll", onScroll);
$('.main-menu a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('a').each(function () {
        $(this).removeClass('active-menu-link');
    })
    $(this).addClass('active-menu-link');
    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 80
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.main-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top -80 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main-menu-link').removeClass("active-menu-link");
            currLink.addClass("active-menu-link");
        }
        else{
            currLink.removeClass("active-menu-link");
        }
    });
}