jQuery(function() {
    new fJs.Sticky({
        elt: '#static-header',
    });
    new fJs.Intersection({
        elt: '.visible',
        class: "animate__animated animate__fadeInDown opacity-100",
        root: null,
        ratio: 0.2,
        rootMargin: '0px',
        threshold: 0.7,
    });
    $('.home-slide').owlCarousel({
        items : 1,
        nav : false,
        dots : false,
        loop: true,
        autoplay:true,
        autoplaySpeed:1500,
        autoplayTimeout:10000,
        autoHeight:true,
        responsive: {
            1279: {
                items: 1
            },
            1250: {
                items: 1
            },
            600: {
                items: 1
            }
        }
    });
})
