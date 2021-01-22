const prompt = require("prompt-sync")();

// 1. IDENTIFY THE STATE
// - variables that represent the problem
// - variables that represent the solution
let secret;
let guesses = 10;
let ans = [];

secret = prompt("Please enter the secret sentence: ");
noOfUnique = 0;
// Dictionary in Python is known as Objects in JavaScript
let unique = {};
let i = 0;
while (i < secret.length) {
  let alphabet = secret[i];
  // if the key represented by the variable alphabet does
  // not exists in the unique object
  if (unique.hasOwnProperty(alphabet) == false) {
    unique[alphabet] = 1;
    noOfUnique += 1;
  }
  i += 1;
}

console.log("No of unique =" + noOfUnique);

while (guesses > 0) {
  console.log("Guesses left:" + guesses);

  let displayStr = "";
  let i = 0;
  while (i < secret.length) {
    // if the current alphabet that we are displaying
    // is inside the ans array/list, then it meant that
    // the player has guessed correcrly. If so, instead of
    // displayng the _, we display the alphabet
    if (ans.indexOf(secret[i]) != -1) {
      displayStr = displayStr + secret[i] + " ";
    } else {
      displayStr = displayStr + "_" + " ";
 
    }
         i = i + 1;
  }
  console.log(displayStr);

  let player_guess = prompt("Key in an alphabet: ");
  if (player_guess == "!") {
    break;
  }
  // check if the player_guess is inside the secret string
  // note: indexOf() will return -1 if the given argument is not found in the string
  if (secret.indexOf(player_guess) != -1) {
    console.log("Your guess exists inside secret");
    ans.push(player_guess);
    console.log(ans);

    // TODO: Check if player has win the game?
    if (ans.length == noOfUnique) {
      console.log("You have won!");
      break;
    }
  } else {
    console.log("You have guessed wrongly. Try again");
    guesses -= 1;
  }
}
