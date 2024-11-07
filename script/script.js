// Chiamare l'img e il buttone con i loro ID
const lampadinaSpenta = document.getElementById("spenta");
const buttoneAccendere = document.getElementById("accendere");
// la function per scambiare l'img al momento del click
function accendiSpegni() {
  if (
    lampadinaSpenta.src.includes("white_lamp.png") &&
    (document.getElementById("accendere").innerHTML = "Accendi")
  ) {
    lampadinaSpenta.src = "./img/yellow_lamp.png";
    document.getElementById("accendere").innerHTML = "spegni";
  } else if (
    lampadinaSpenta.src.includes("yellow_lamp.png") &&
    (document.getElementById("accendere").innerHTML = "spegni")
  ) {
    lampadinaSpenta.src = "./img/white_lamp.png";
    document.getElementById("accendere").innerHTML = "Accendi";
  }
}
// applicare la function sull buttone  al momento del click
buttoneAccendere.addEventListener("click", accendiSpegni);
