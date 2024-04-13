const hamburger = document.querySelector('.nav-hamburger-li');
const list = document.querySelector('.header--nav ul');

hamburger.addEventListener('click', function () {
   if (list.style.display === "flex") {
      list.style.display = "none"
   } else {
      list.style.display = "flex";
   }

});