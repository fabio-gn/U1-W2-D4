// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
const checkArray = function (howManyRandom) {
  if (typeof howManyRandom !== "number") {
    return "there was an error";
  }
  let randArray = giveMeRandom(parseInt(howManyRandom));
  let sum = 0;
  for (let i = 0; i < randArray.length; i++) {
    if (randArray[i] > 5) {
      console.log(randArray[i]);
      sum += randArray[i];
    }
  }
  return sum;
};
console.log(checkArray(5)); // prova con valore intero
console.log(checkArray("pasta")); //prova con stringa non valida
console.log(checkArray(7, 58)); // prova con valore float

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
    {
        'price': 10,
        'name': 'c-14',
        'id': 1234,
        'quantity': 2
    },
    {
        'price': 5,
        'name': 'c-14',
        'id': 1234,
        'quantity': 1
    },
    {
        'price': 5,
        'name': 'c-14',
        'id': 1234,
        'quantity': 3
    },
]
const shoppingCartTotal = function(arrName){
    let total = 0;
    for(let i = 0; i < arrName.length; i++){
        total += arrName[i].price * arrName[i].quantity;
    }
    return total;
}
console.log('totale carrello: ', shoppingCartTotal(shoppingCart));
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function(price, name, id, quantity){
    shoppingCart.push({
        'price': price,
        'name': name,
        'id': id,
        'quantity': quantity,
    });
    return shoppingCart.length;
}
console.log('quantità oggetti: ', addToShoppingCart(10, 'frottoli', 1243, 1));
console.log('carrello aggiornato: ', shoppingCart);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = ()=>{
    // trascrivo i prezzi in priceArray
    const pricesArray = [];
    for (let i = 0; i < shoppingCart.length; i++) {
        pricesArray.push(shoppingCart[i].price);
    }
    // confronto i prezzi per scoprire qual è il più grande
    let biggest = 0;
    for (let i = 0; i < pricesArray.length - 1; i++) {
        switch (true) {
            case pricesArray[i] > pricesArray[i + 1]:
                biggest = pricesArray[i];
                break;
        
            default:
                biggest = pricesArray[i + 1] ;
                break;
        }
    }
    // gli oggetti di shoppingCart che hanno valore uguale a biggest vengono pushati in un'array
    let priciestItems = []
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price === biggest){
            priciestItems.push(shoppingCart[i]);
        }
    }
    return priciestItems;
}

console.log('gli oggetti più cari sono: ', maxShoppingCart());
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(array){
    return array[array.length-1]
}

console.log('l\'ultimo item è: ', latestShoppingCart(shoppingCart))

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
