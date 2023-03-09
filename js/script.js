// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

const priceForKm = 0.21;

const titolo = document.querySelector(".titolo");

// METTO LA PAGINA IN ASCOLTO DEL "CLICK" SUL BOTTONE
const buttonInput = document.querySelector(".submit-button");
buttonInput.addEventListener("click", function () {
  // CHIEDO ALL'UTENTE COME SI CHIAMA?
  const nameSurnameInput = document.querySelector(".name-input").value;
  // RECUPERO I CHILOMETRI PERCORSI 0DALL'UTENTE E LA SUA ETA'
  const kilometresInput = parseInt(
    document.querySelector(".kilometres-input").value
  );

  const ageInput = parseInt(document.querySelector(".age-input").value);

  // SULLE BASI DELLA PRIMA DOMANDA CALCOLIAMO IL PREZZO INTERO DEL BIGLIETTO
  const totalPrice = kilometresInput * priceForKm;
  // SULLA BASE DELL'ETA' DEL NOSTRO UTENTE CALCOLIAMO LO SCONTO
  let discount = 0;
  if (ageInput < 18) {
    discount = 20;
  } else if (ageInput > 65) {
    discount = 40;
  }
  console.log("sconto", discount);

  console.log("total price", totalPrice);

  const finalPrice = totalPrice - totalPrice * (discount / 100);
  console.log(finalPrice.toFixed(2));
  document.querySelector(
    ".result"
  ).innerHTML = `Ciao ${nameSurnameInput} il costo del tuo biglietto è €${finalPrice.toFixed(
    2
  )}`;
});
