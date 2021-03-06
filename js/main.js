//jQuery function for filtering projects

$(document).ready(function(){

    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;

    })

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }

    });

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    var i = 0;
    var speed = 50;

    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("typeWriter").innerHTML;
            i++;
            setTimeout(typeWriter, speed);
          }
    }

    AOS.init();


    $(".navbar-nav a").on("click", function(){
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
     });


});
