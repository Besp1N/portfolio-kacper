const hamburger = document.querySelector('.nav-hamburger-li');
const list = document.querySelector('.header--nav ul');
const backdrop = document.createElement('div');
backdrop.classList.add('backdrop');
backdrop.style.backgroundColor = "white";
document.body.appendChild(backdrop);

hamburger.addEventListener('click', function () {
   if (list.style.display === "flex") {
      closeMenu();
   } else {
      openMenu();
   }
});

function closeMenu() {
   list.style.display = "none";
   backdrop.style.display = "none";
   document.body.style.overflow = "auto";
}

function openMenu() {
   list.style.display = "flex";
   backdrop.style.display = "block";
   document.body.style.overflow = "hidden";
}

function resizeHandler() {
   if (window.innerWidth >= 1000) {
      list.style.display = "flex";
   } else if (!hamburger.classList.contains('active')) {
      closeMenu();
   }
}


window.addEventListener('resize', resizeHandler);

window.addEventListener('load', resizeHandler);
