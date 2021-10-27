/* let recordedNums;

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


    //controllo se e quali numeri sono uguali a quelli del pc
    let equalNums = userNums.filter((element) => {
        return pcNums.includes(element);
    })


    console.log(`I numeri corretti sono ${equalNums.length}: ${equalNums}`);

}, 30000);


 */

const mainContainer = document.getElementById("main-container");
const btnContainer = document.getElementById("btn-container");
const btnNumberGenerator = document.getElementById("btn-number-generator");


//creo form per inserire numeri
const inputContainer = document.createElement("div")
inputContainer.classList.add("input-group", "mb-3", "w-50");
const inputNums = document.createElement("input");
inputNums.type = "text";
inputNums.classList.add("form-control");
inputNums.placeholder = "Inserisci i numeri che ricordi separati da uno spazio..."
const btnDone = document.createElement("button");
btnDone.classList.add("btn", "btn-outline-secondary", "bg-btn-done", "text-light");
btnDone.type = "button";
btnDone.innerHTML = "Fatto";
inputContainer.append(inputNums);
inputContainer.append(btnDone);


const counterContainer = document.createElement("div");


let pcNums;
const btnGo = document.createElement("button");

//genero numeri casuali
btnNumberGenerator.addEventListener("click", function () {
    btnContainer.innerHTML ="";
    mainContainer.innerHTML = "";
    //genero numeri casuali e li mostro sul display
    pcNums = arrRandNums(5);
    mainContainer.innerHTML = `<h1>I numeri da memorizzare sono: ${pcNums}</h1>`;
    console.log(pcNums);   

    //faccio sparire numeri dopo 3 secondi
    mainContainer.innerHTML += `<h3>Pronto a memorizzarli?</h3>`
    let sec = 3;
    const countDown = setInterval(() => {
        counterContainer.innerHTML = `<h3>${sec}</h3>`
        mainContainer.append(counterContainer);
        
        if (sec === 0) {
            clearInterval(countDown);
            mainContainer.innerHTML = "";            
        }

        sec--;
    }, 1000);
    
    setTimeout(() => {
        mainContainer.classList.add("d-flex", "justify-content-center");
        mainContainer.append(inputContainer);
    }, 34000);
})

//leggo i numeri inseriti dall'utente
btnDone.addEventListener("click", function () {
    let userNumsInput = inputNums.value; 
    //console.log(typeof userNumsInput, userNumsInput);
    userNumsInput = userNumsInput.split(" ");
    //console.log(userNumsInput.split(" "));

    let userNums = userNumsInput.map((num) =>{
        return parseInt(num);
    });
    console.log("Numeri inseriti convertiti in number: " + userNums);

    //controllo se e quali numeri sono uguali a quelli del pc
    let equalNums = userNums.filter((element) => {
        return pcNums.includes(element);
    })
    //console.log(`I numeri corretti sono ${equalNums.length}: ${equalNums}`);

    let notEqualNums = pcNums.filter((element) =>{
        return !userNums.includes(element);
    })
    console.log(("numeri dimenticati: " + notEqualNums));

    let atLeastOne = false;
    if (equalNums != 0){
        atLeastOne = true;
    }

    if (atLeastOne){

        if (equalNums.length === pcNums.length) {
            mainContainer.innerHTML = `<h3> Complimenti hai ricordato correttamente tutti i numeri: ${equalNums}.</h3>`;
        } else {
            mainContainer.innerHTML = `<h3> Complimenti hai ricordato correttamente ${equalNums.length} numeri: ${equalNums}. Purtroppo hai dimenticato ${notEqualNums}</h3>`;
        }    
    } else {
        mainContainer.innerHTML = `<h3> Non è andata bene, non hai ricordato correttamente nemmeno un numero. <br>I numeri erano: ${pcNums}. <br> Allena la memoria e riprova! </h3>`;
    }

})



































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
