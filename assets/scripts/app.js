const hamburger = document.querySelector('.nav-hamburger-li');
const list = document.querySelector('.header--nav ul');
const backdrop = document.createElement('div');
backdrop.classList.add('backdrop');
backdrop.style.backgroundColor = "white"; // Ustaw kolor tła na biały
document.body.appendChild(backdrop);

hamburger.addEventListener('click', function () {
   if (list.style.display === "flex") {
      list.style.display = "none";
      backdrop.style.display = "none"; // Ukryj tło, gdy menu jest zamknięte
      document.body.style.overflow = "auto"; // Przywróć overflow do wartości domyślnej
   } else {
      list.style.display = "flex";
      backdrop.style.display = "block"; // Pokaż tło, gdy menu jest otwarte
      document.body.style.overflow = "hidden"; // Ukryj overflow, gdy menu jest otwarte
   }
});
