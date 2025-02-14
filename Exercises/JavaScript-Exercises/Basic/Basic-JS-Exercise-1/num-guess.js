let playAgain = true;

while (playAgain) {
    let guessedCorrectly = false;
    const maxAttempts = 5;
    const randomNum = Math.floor(Math.random()* 100) + 1;
    let attempts;

    // loop for attempts
    for (attempts = 0; attempts < maxAttempts; attempts++) {
        let guessStr = prompt(`Attempt ${attempts + 1}/${maxAttempts} Guess the number (1-100):`);
        let guess = Number(guessStr)

        // error handling
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Invalid input. Please enter a number between 1 and 100 (inclusive).");
            attempts--;
            continue;
        }

        // feedback
        if (guess === randomNum) {
            alert(`Yey! You got the number ${randomNum} right in ${attempts + 1} attempt(s)!`);
            guessedCorrectly = true;
            break;
        } else if (randomNum < guess) {
            alert("Lower");
            console.log("Lower");
        } else {
            alert("Higher");
            console.log("Higher");
        }
    }

    if (!guessedCorrectly) {
        alert(`Sorry, you didn't get the number right. The number was ${randomNum}. You took ${attempts} attempts.`);
    }

    playAgain = confirm("Do you want to play again?");
}

alert("Thank you for playing!");