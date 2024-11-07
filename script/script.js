// Chiamare l'img e il buttone con i loro ID
const lampadinaSpenta = document.getElementById("spenta");
const buttoneAccendere = document.getElementById("accendere");
console.log(buttoneAccendere);

// la function per scambiare l'img al momento del click
function accendiSpegni() {
  if (lampadinaSpenta.src.includes("white_lamp.png") && buttoneAccendere) {
    lampadinaSpenta.src = "./img/yellow_lamp.png";

    buttoneAccendere.innerHTML = "spegni";
  } else {
    lampadinaSpenta.src = "./img/white_lamp.png";
    document.getElementById("accendere").innerHTML = "Accendi";
  }
}
// applicare la function sull buttone  al momento del click
buttoneAccendere.addEventListener("click", accendiSpegni);
