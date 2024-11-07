// Chiamare l'img e il buttone con i loro ID
const lampadinaSpenta = document.getElementById("spenta");
const buttoneAccendere = document.getElementById("accendere");
// la function per scambiare l'img al momento del click
function accensione() {
  if (lampadinaSpenta.src.includes("white_lamp.png")) {
    lampadinaSpenta.src = "./img/yellow_lamp.png";
  }
}
// applicare la function sull buttone  al momento del click
buttoneAccendere.addEventListener("click", accensione);
