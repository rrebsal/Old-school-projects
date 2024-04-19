var puzzle = prompt("Give a number between 1-50")

var answer = Math.floor(Math.random() * 50) + 1;

while(puzzle != answer){
    puzzle = prompt("Wrong. Try again.");
} alert("You did it.")