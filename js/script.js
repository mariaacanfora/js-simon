let randNums = [];
let recordedNums;

alert("I numeri da memorizzare sono: " + arrRandNums(5, randNums));

setTimeout(() => {
    userNums = prompt("Inserisci i numeri memorizzati").split(" ");
    
    console.log(userNums);
    
}, 1000);










/**********************************************************/
/* Functions */
/**********************************************************/
/**
 * Returns a random number between minValue and maxValue
 * @param {number} minValue rappresenta il limite inferiore (incluso) dell'intervallo entro cui voglio generare il numero random
 * @param {number} maxValue rappresenta il limite superiore (incluso) dell'intervallo entro cui voglio generare il numero random
 */
 function randomNumber(minValue = 0, maxValue = 100) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}


/**
 * 
 * @param {number} arrLength 
 * @param {array} arrNums
 */
function arrRandNums(arrLength, arrNums) {
    for (let i = 0; i < arrLength; i++) {
        num = randomNumber();
        arrNums.push(num);
    };

    return arrNums;
}