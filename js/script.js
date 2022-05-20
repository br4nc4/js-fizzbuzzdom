"use strict"

/* MILESTONE 1 */

for (let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

/* MILESTONE 2 */
const numberElement = document.getElementById("number");
const fizzElement = document.getElementById("numberFizz");
const buzzElement = document.getElementById("numberBuzz");
const fizzBuzzElement = document.getElementById("numberFizzBuzz");

/* TEST PER VERIFICARE CHE SIANO EFFETTIVAMENTE PRESE DALL'HTML */
console.log(numberElement, fizzElement, buzzElement, fizzBuzzElement);

