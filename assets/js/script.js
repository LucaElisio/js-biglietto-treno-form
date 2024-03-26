
// Definisco prezzo al km
const priceKm = 0.21; //number

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
    
    // Definisco sconto
    let discount = 0; //number

    // Calcolo prezzo base
    const priceBasic = priceKm * userKmValue; //number
    console.log("prezzo base ", priceBasic);

    // Imposto condizione per definire lo sconto
    if (userAgeValue < 18) {
        discount = 0.20;
    } else if (userAgeValue > 65) {
        discount = 0.60
    }
    
    console.log("sconto applicato ", discount);

    // Calcolo sconto totale
    const totalDiscount = priceBasic * discount;
    console.log("sconto totale ", totalDiscount);

    // Calcolo il prezzo finale
    const finalPrice = priceBasic - totalDiscount;
    console.log("prezzo finale ", finalPrice);
    

    //* OUTPUT

    // Stampo in pagina i km
    const resultKmElem = document.querySelector("#result p:nth-child(1)");
    resultKmElem.innerHTML += userKmValue;

    // Stampo in pagina l'età
    const resultAgeElem = document.querySelector("#result p:nth-child(2)");
    resultAgeElem.innerHTML += userAgeValue;

    // Stampo in pagina il prezzo base
    const resultPriceBasicElem = document.querySelector("#result p:nth-child(3)");
    resultPriceBasicElem.innerHTML += priceBasic;

    // Stampo in pagina lo sconto applicato
    const resultTotalDiscountElem = document.querySelector("#result p:nth-child(4)");
    resultTotalDiscountElem.innerHTML += totalDiscount;

    // Stampo in pagina il prezzo finale
    const resultFinalPriceElem = document.querySelector("#result p:nth-child(5)");
    resultFinalPriceElem.innerHTML += finalPrice; 
    

})