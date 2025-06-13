$(".page-loader").fadeOut();

$('#timeline').owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 2,
            nav: false
        },
        1024: {
            items: 4,
            nav: true,
        }
    }
})

$('#heroText').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        }
    }
})





$("#menuBtn").click(function () {
    $(this).hide();
    $('.headerTop nav').addClass('menuOpen');
    $('.headerTop .navBg').show();
});

$("#menuClose").click(function () {
    $('#menuBtn').show();
    $('.headerTop nav').removeClass('menuOpen');
    $('.headerTop .navBg').hide();
});
