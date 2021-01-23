// to firstly load the content and then execute the scripts
document.addEventListener('DOMContentLoaded', () => {
  const navBarElement = document.querySelector('.navbar');

  function addShadow() {
      if (window.scrollY >= 300) {
          navBarElement.classList.add('shadow-bg');
      } else {
          navBarElement.classList.remove('shadow-bg');
      }
    };
    
    window.addEventListener('scroll', addShadow);

    $(document).ready(function () {
      $(document).click(function (event) {
          var clickover = $(event.target);
          var _opened = $(".navbar-collapse").hasClass("show");
          if (_opened === true && !clickover.hasClass("navbar-toggler")) {
              $(".navbar-toggler").click();
          }
      });
  });
});