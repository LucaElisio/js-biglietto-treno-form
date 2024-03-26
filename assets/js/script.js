
// Definisco prezzo al km
const priceKm = 0.21; //number

// Definisco sconto
let discount = 0; //number

// Trovo bottone nella pagina
const sendBtnElem = document.getElementById("send-btn"); //object | null

// Aggiungo un evento al click del bottone
sendBtnElem.addEventListener("click", function() {

    //* RACCOLTA DATI

    // Trovo input dei km nella pagina
    const userKmElem = document.getElementById("userkm");
    console.log(userKmElem);
    // Salvo in variabile il valore dell'input
    const userKmValue = parseInt(userKmElem.value);
    console.log(userKmValue);

    // Trovo input dell'età nella pagina
    const userAgeElem = document.getElementById("userage");
    console.log(userAgeElem);
    // Salvo in variabile il valore dell'età
    const userAgeValue = parseInt(userAgeElem.value);
    console.log(userAgeValue);


    //* ESECUZIONE LOGICA

    // Calcolo prezzo base
    const priceBasic = priceKm * userKmValue; //number
    console.log(priceBasic);

})