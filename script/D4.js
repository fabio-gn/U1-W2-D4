/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
    return l1 * l2;
}
console.log("the area of the rectangle is ",area(10, 15));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(int1, int2){
    if(int1 !== int2){
        return int1 + int2;
    } else {
        return (int1 + int2)* 3;
    }
}
console.log("sum of different numbers", crazySum(12, 18));
console.log("sum of same numbers", crazySum(10, 10));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num){
    if (num > 19){
        return (num -19 ) * 3;
    } else {
        return 19 - num;
    }
}
console.log('numero maggiore', crazyDiff(49));
console.log('numero minore', crazyDiff(3));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if((n >= 20 && n <= 100) || n === 400){
        return true;
    } else{
        return false;
    }
    
}
console.log(boundary(30));
console.log(boundary(400));
console.log(boundary(101));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str){
    let strArray = str.split(' ');
    if(strArray[0] === "EPICODE"){
        return str;
    } else {
        return "EPICODE" + str;
    }
}
console.log(epify('EPICODE è dove studio'));
console.log(epify(' è dove studio'))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(positiveInt){
    if (positiveInt % 7 === 0 || positiveInt % 3 === 0){
        return true;
    } else {
        return false
    }
}
console.log('49', check3and7(49));
console.log('100', check3and7(100));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(testo){
    let lunghezza = testo.length;
    let myArray = []
    for(let i = 0; i < testo.length; i++){
        myArray.unshift(testo.charAt(i));
    }
    
    return myArray.join('');
}
console.log(reverseString('ciao sono fabio'))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str){
    let strArr = str.split(' ');
    console.log(strArr);
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
        // array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
    }
    return strArr.join(' ');
}
console.log(upperFirst('mi chiamo fabio sono io'))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str){
    return str.slice(1, str.length-1);
}
console.log(cutString('xciao come staix'));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(int){
    let randomArray = [];
    for(let i = 0; i <= int; i++){
        randomArray.push(Math.floor(Math.random() * 11));
    }
    return randomArray;
}
console.log(giveMeRandom(20));