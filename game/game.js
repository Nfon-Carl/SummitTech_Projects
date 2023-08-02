function playGuessingGame(numToGuess, numOfGuess = 10) {
  let guess = prompt("Please enter a number between 1 and 100");
  let trials = numOfGuess;
  while (numOfGuess > 0) {
    if (guess === "") {
      guess = prompt("please enter a number");
    } else if (guess == null) {
      return 0;
    } else if (isNaN(guess)) {
      guess = prompt("please enter a number");
    } else if (guess == numToGuess) {
      numOfGuess--;
      alert(
        "Sucessfully Guessed number in " + (trials - numOfGuess) + " trials"
      );
      return 0;
    } else if (guess < numToGuess) {
      numOfGuess--;
      guess = prompt(
        guess + " is to small \n Please enter a number between 1 and 100"
      );
    } else if (guess > numToGuess) {
      numOfGuess--;
      guess = prompt(
        guess + " is to big \n Please enter a number between 1 and 100"
      );
    }
  }

  if (numOfGuess == 0) {
    alert("You have Exhausted your number of trials");
    return 0;
  }
}
