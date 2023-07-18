playGuessingGame = (numToGuess, numOfGuess = 10) => {
  let trial = 0;
  let guess = prompt("Please enter your number from 1 to 100");
  while (numOfGuess > 1) {
    if (guess === numToGuess) {
      trial++;
      alert(
        "Sucessfully Guessed Number " + numToGuess + " In " + trial + " trials"
      );
      return trial;
    } else if (guess > numToGuess) {
      numOfGuess--;
      trial++;
      guess = parseInt(
        prompt(guess + " To high \n Please enter your number from 1 to 100")
      );
    } else if (guess < numToGuess) {
      numOfGuess--;
      guess = prompt(
        guess + " To Low \n Please enter your number from 1 to 100"
      );
    } else if (guess == " ") {
      alert("Please input a number ");
    }
    if (isNaN(guess)) {
      guess = prompt(
        guess + " To high \n Please enter your number from 1 to 100"
      );
    }
  }
  //   if (numOfGuess == 0) {
  //     alert("Exaushted Trials");
  //   }
  return numOfGuess;
};
