let recordedNums;

//genero i numeri da mostrare nell'alert
let pcNums = arrRandNums(5)

//genero alert
alert("I numeri da memorizzare sono: " + pcNums);
console.log(pcNums);



setTimeout(() => {

    //chiedo all'utente di inserire i numeri che ricorda
    let userNums = prompt("Inserisci i numeri memorizzati separati a uno spazio").split(" ");
    //console.log("Numeri inseriti in stringa: " + userNums);

    //converto i numeri immessi dall'utente da string a number
    userNums = userNums.map((num) =>{
        return parseInt(num);
    })
    //console.log("Numeri inseriti convertiti in number: " + userNums);

    /* while(isNaN(userNums)){
        console.log("entro nel while");
        userNums = prompt("Immissione non valida. Inserisci i numeri memorizzati separati a uno spazio").split(" ");
        console.log("valori nel while prima della conversione: " + userNums);
        userNums = userNums.map((num) =>{
            return parseInt(num);
        })

        console.log("valore nel while: " + userNums);
    } */

    //controllo se e quali numeri sono uguali a quelli del pc
    let equalNums = userNums.filter((element) => {
        return pcNums.includes(element);
    })


    console.log(`I numeri corretti sono ${equalNums.length}: ${equalNums}`);

}, 30000);











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
 * Returns an array with arrLength random numbers
 * @param {number} arrLength 
 */
function arrRandNums(arrLength) {
    let arrNums = [];
    let ranNum;
    while (arrNums.length < arrLength){
        ranNum = randomNumber();

        if (!arrNums.includes(ranNum)){
            arrNums.push(ranNum);
        }        
    }
    return arrNums;
}
