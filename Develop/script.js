// Assignment code here

// Get password length
var passwordLength

function promptLength() {
  
  var lengthInput = window.prompt("Please choose a password length between 8 and 128 characters.");

  // If lengthInput is not a number then user is alerted and prompted again
  if (isNaN(lengthInput)) {
    window.alert("Please enter a numerical value.");
    promptLength();
  }

  // If lengthInput isn't a number between 8 and 128, then user is alerted then prompted again
  else if (lengthInput < 8 || lengthInput > 128) {
    window.alert("Please enter a valid character length.");
    promptLength();
  }

  // Gives passwordLength the value of the user's desired password length
  else {
    passwordLength = lengthInput;
    console.log(passwordLength);
  }
}

promptLength();

// Generate Password function
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
