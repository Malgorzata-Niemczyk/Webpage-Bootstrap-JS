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
});