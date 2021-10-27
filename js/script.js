let recordedNums;

//genero i numeri da mostrare nell'alert
let pcNums = arrRandNums(5)

//genero alert
alert("I numeri da memorizzare sono: " + pcNums);
console.log(pcNums);



setTimeout(() => {

    //chiedo all'utente di inserire i numeri che ricorda
    let userNums = prompt("Inserisci i numeri memorizzati").split(" ");
    
    //converto i numeri immessi dall'utente da string a number
    userNums = userNums.map((num) =>{
        return parseInt(num);
    })
    console.log(userNums);

    //controllo se e quali numeri sono uguali a quelli del pc


}, 1000);











/**********************************************************/
/* Functions */
/**********************************************************/
/**
 * Returns a random number between minValue and maxValue
 * @param {number} minValue rappresenta il limite inferiore (incluso) dell'intervallo entro cui voglio generare il numero random
 * @param {number} maxValue rappresenta il limite superiore (incluso) dell'intervallo entro cui voglio generare il numero random
 */
 function randomNumber(minValue = 1, maxValue = 100) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}


/**
 * 
 * @param {number} arrLength 
 * @param {array} arrNums
 */
function arrRandNums(arrLength) {
    let arrNums = [];
    for (let i = 0; i < arrLength; i++) {
        num = randomNumber();
        arrNums.push(num);
    };

    return arrNums;
}