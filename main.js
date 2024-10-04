let secretNumber = Math.floor(Math.random() * 10) + 1;
function startGame() {
    let userGuess = parseInt(prompt("Enter your guess (between 1 and 10):"));
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        document.getElementById("result").innerHTML = "Invalid input!";
        return;
    }
    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer.");
        document.getElementById("result").innerHTML = "Bingo! Correct answer.";
    }
    else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
        alert("Close enough to the correct answer.");
        document.getElementById("result").innerHTML = "Close enough to the correct answer.";
    }
    else if (userGuess < secretNumber) {
        alert("Your guess is too low. Try again!");
        document.getElementById("result").innerHTML = "Too low! Try again.";
    }
    else if (userGuess > secretNumber) {
        alert("Your guess is too high. Try again!");
        document.getElementById("result").innerHTML = "Too high! Try again.";
    }
}