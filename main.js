const btnNavbar = document.querySelector(".btn__menu");
const hiddenContent = document.querySelector(".hidden-content");

let activador = true;
btnNavbar.addEventListener("click", (e) => {
  console.log("funciona");
  if (activador) {
    hiddenContent.style.width = `${0}px`;
    activador = false;
  } else {
    hiddenContent.style.width = `${320}px`;
    activador = true;
  }
});
document.querySelector('a[href^="#"]').addEventListener('click', function (e) {
    e.preventDefault();
  
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
  