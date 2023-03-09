// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// RECUPERO I CHILOMETRI PERCORSI 0DALL'UTENTE E LA SUA ETA'
const kilometresInput = document.querySelector(".kilometres-input");

const ageInput = document.querySelector(".age-input");

// METTO LA PAGINA IN ASCOLTO DEL "CLICK" SUL BOTTONE
const buttonInput = document.querySelector(".submit-button");
buttonInput.addEventListener("click", function () {
  console.log("Valore KM", kilometresInput.value);
  console.log("Valore AGE", ageInput.value);
});
