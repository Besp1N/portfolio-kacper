const hamburger = document.querySelector('.nav-hamburger-li');
const list = document.querySelector('.header--nav ul');
const backdrop = document.createElement('div');
backdrop.classList.add('backdrop');
document.body.appendChild(backdrop);

hamburger.addEventListener('click', function () {
   if (list.style.display === "flex") {
      list.style.display = "none";
      backdrop.style.display = "none"; // Ukryj tło, gdy menu jest zamknięte
   } else {
      list.style.display = "flex";
      backdrop.style.display = "block"; // Pokaż tło, gdy menu jest otwarte
   }
});
