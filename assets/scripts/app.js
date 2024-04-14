const hamburger = document.querySelector('.nav-hamburger-li');
const list = document.querySelector('.header--nav ul');
const backdrop = document.createElement('div');
const nightModeButton = document.querySelector('.night-mode');
const nightModeMobile = document.querySelector('.night');

const nightModeIcon = document.querySelector('.night-mode');
const mobileNightModeIcon = document.querySelector('.night');

backdrop.classList.add('backdrop');
backdrop.style.backgroundColor = "white";
document.body.appendChild(backdrop);


let nightMode = false;


// MOBILE
nightModeMobile.addEventListener('click', function () {
   nightMode = !nightMode;
   if (nightMode) {
      backdrop.style.backgroundColor = "black";
      document.body.appendChild(backdrop);
      // Zmiana kolorów na tryb nocny
      document.documentElement.style.setProperty('--body-color', '#000');
      document.documentElement.style.setProperty('--color-white', '#000');
      document.documentElement.style.setProperty('--color-black', '#fff');
      document.body.style.color = '#fff';
      document.querySelector('.header').style.backgroundColor = '#000';
      document.querySelector('.header').style.color = '#fff';
      document.querySelector('.download-cv-button a').style.color = '#000';
      mobileNightModeIcon.classList.remove('uil-moon');
      mobileNightModeIcon.classList.add('uil-sun');
   } else {
      backdrop.style.backgroundColor = "white";
      document.body.appendChild(backdrop);
      // Przywrócenie pierwotnych kolorów
      document.documentElement.style.setProperty('--body-color', 'rgb(250, 250, 250)');
      document.documentElement.style.setProperty('--color-white', '#fff');
      document.documentElement.style.setProperty('--color-black', '#000');
      document.body.style.color = '#000';
      document.querySelector('.header').style.backgroundColor = '#fff';
      document.querySelector('.header').style.color = 'initial';
      mobileNightModeIcon.classList.remove('uil-sun');
      mobileNightModeIcon.classList.add('uil-moon');
   }
});


// DESKTOP
nightModeButton.addEventListener('click', function () {
   nightMode = !nightMode;

   if (nightMode) {
      // Zmiana kolorów na tryb nocny
      document.documentElement.style.setProperty('--body-color', '#000');
      document.documentElement.style.setProperty('--color-white', '#000');
      document.documentElement.style.setProperty('--color-black', '#fff');
      document.body.style.color = '#fff';
      document.querySelector('.header').style.backgroundColor = '#000';
      document.querySelector('.header').style.color = '#fff';
      document.querySelector('.download-cv-button a').style.color = '#000';
      nightModeIcon.classList.remove('uil-moon');
      nightModeIcon.classList.add('uil-sun');
   } else {
      // Przywrócenie pierwotnych kolorów
      document.documentElement.style.setProperty('--body-color', 'rgb(250, 250, 250)');
      document.documentElement.style.setProperty('--color-white', '#fff');
      document.documentElement.style.setProperty('--color-black', '#000');
      document.body.style.color = '#000';
      document.querySelector('.header').style.backgroundColor = 'initial';
      document.querySelector('.header').style.color = 'initial';
      nightModeIcon.classList.remove('uil-sun');
      nightModeIcon.classList.add('uil-moon');
   }
});


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
