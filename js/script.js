/*===========================Typing Animation ====================*/
var typed = new Typed(".typing", {
    strings: ["","Web Designer", "web Developer", "Graphic Designer"],
    typeSpeed: 100, 
    backSpeed: 60,
    loop: true,
});
// JavaScript to highlight menu items on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const asideLinks = document.querySelectorAll('.aside .nav li a');
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.clientHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        asideLinks[index].classList.add('active');
      } else {
        asideLinks[index].classList.remove('active');
      }
    });
  });
  