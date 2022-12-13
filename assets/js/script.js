$(document).ready(function() {
    $(function() {
        $(".game-icon").draggable();
    });

    $(document).on('wheel scroll', function() {
        imageRotation()
    });

    function imageRotation() {
        let mainArea = $('.about-section').outerHeight(true) + $('.philosophy-section').outerHeight(true) + $('.dx-section').outerHeight(true) + $('.company-section').outerHeight(true) + $('.contact-section').outerHeight(true)
        let scrollTop = $(document).scrollTop()
        if (scrollTop >= 400) {
            let currentScroll = scrollTop - 400

            let rotate = ((currentScroll * 100) / mainArea) * (mainArea / 360)

            $(".animated-img").css("transform", "rotate(" + rotate + "deg)");
        }

    }

    $('.hamburger').click(function() {
        $('.neo-right').toggleClass('mobile-menu')
    })

    $(window).resize(function() {
        let width = $(window).width()

        if (width > 880) {
            $('.neo-right').removeClass('mobile-menu')
        }
    });

    /*Cursor JS Start*/
    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window).mouseleave(function() {
        cursor.css({
            opacity: "0"
        });
    }).mouseenter(function() {
        cursor.css({
            opacity: "1"
        });
    });

    $("a").mouseenter(function() {
        cursor.css({
            transform: "scale(3)"
        });
    }).mouseleave(function() {
        cursor.css({
            transform: "scale(1)"
        });
    });

    $(window).mousedown(function() {
        cursor.css({
            transform: "scale(.2)"
        });
    }).mouseup(function() {
        cursor.css({
            transform: "scale(1)"
        });
    });
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})


const rtl = document.querySelectorAll('.rtl')
rtl.forEach(el => observer.observe(el))

const ltr = document.querySelectorAll('.ltr')
ltr.forEach(el => observer.observe(el))
