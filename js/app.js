// to firstly load the content and then execute the scripts
document.addEventListener('DOMContentLoaded', () => {
  const navBarElement = document.querySelector('.navbar');

  // function that adds the shadow to the navigation when scrolling down
  function addShadow() {
      if (window.scrollY >= 300) {
          navBarElement.classList.add('shadow-bg');
      } else {
          navBarElement.classList.remove('shadow-bg');
      }
    };
    
    window.addEventListener('scroll', addShadow);

    // script fixing navigation (the navigation closes upon clicking any place of the mobile screen)
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
              $(".navbar-toggler").click();
        }
    });

    // slickJS
    $('.team-slideshow').slick({
    //   setting-name: setting-value
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });
});