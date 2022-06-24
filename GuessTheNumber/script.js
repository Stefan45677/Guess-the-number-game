//This is my sh*t code that i wrote. Hope you enjoy it.


var inputed_number;
var inputfild = document.getElementById("inputnum");
let GuessButton = document.getElementById("guessbtn");

let random_number= Math.floor((Math.random() * 1000) + 1);


/*Function to get  value of the input field and then check if the inputed number is the 
is the same as the random number */
function GuessTheNumber(){
    inputed_number = document.getElementById('inputnum').value;
    if(inputed_number >= 1 && inputed_number <= 1000){
        if(inputed_number == random_number){
            document.getElementById('hints').innerHTML = "Congrats, you got it right!";
        }
        else if(inputed_number < random_number){
            document.getElementById('hints').innerHTML = "Go higher bro";
        }
        else if(inputed_number > random_number){
            document.getElementById('hints').innerHTML = "Go lower bro";
        }
    }
    else{
        document.getElementById('hints').innerHTML = "You need to enter number between 1 and 1000 in order to guess!";
    }
}