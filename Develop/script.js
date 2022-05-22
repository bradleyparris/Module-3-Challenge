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

// Get uppercase or lowercase
var passwordCase

  // Prompt user
  function promptCase() {
    var caseInput = window.prompt("Would you like to include uppercase letters? (YES or NO)");
    // Changes input to lower case to make it easier to process
    caseInput = caseInput.toLowerCase();

    // If user wants upper case letters in password
    if (caseInput === "yes") {
      passwordCase = true;
      return passwordCase;
    }
    // If user doesn't want upper case letters in password
    else if (caseInput === "no") {
      passwordCase = false;
      return passwordCase;
    }
    // If user doesn't enter anything
    else if (caseInput === null) {
      window.alert("Please enter either YES or NO");
      promptCase();
    }
    // If user enters anything else
    else {
      window.alert("Please enter either YES or NO");
      promptCase();
    }
  }

  promptCase();

// Does the user want numbers?
var passwordNumbers

  function promptNumbers() {
    var numbersInput = window.prompt("Would you like numbers in your password? (YES or NO)");
      // Changes input to lower case to make it easier to process
      numbersInput = numbersInput.toLowerCase();

      // If user wants upper case letters in password
      if (numbersInput === "yes") {
        passwordNumbers = true;
        return passwordNumbers;
      }
      // If user doesn't want upper case letters in password
      else if (numbersInput === "no") {
        passwordNumbers = false;
        return passwordNumbers;
      }
      // If user doesn't enter anything
      else if (numbersInput === null) {
        window.alert("Please enter either YES or NO");
        promptNumbers();
      }
      // If user enters anything else
      else {
        window.alert("Please enter either YES or NO");
        promptNumbers();
      }
  }

  promptNumbers();
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
