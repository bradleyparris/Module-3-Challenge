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

// Does the user want numbers?
var passwordNumbers

  function promptNumbers() {
    var numbersInput = window.prompt("Would you like numbers in your password? (YES or NO)");
      // Changes input to lower case to make it easier to process
      numbersInput = numbersInput.toLowerCase();

      // If user wants numbers in password
      if (numbersInput === "yes") {
        passwordNumbers = true;
        return passwordNumbers;
      }
      // If user doesn't want numbers in password
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


// Does the user want special characters?
var passwordSpecial

function promptSpecial() {
  var specialInput = window.prompt("Would you like numbers in your password? (YES or NO)");
      // Changes input to lower case to make it easier to process
      specialInput = specialInput.toLowerCase();

      // If user wants special characters in password
      if (specialInput === "yes") {
        passwordSpecial = true;
        return passwordSpecial;
      }
      // If user doesn't want special characters in password
      else if (specialInput === "no") {
        passwordSpecial = false;
        return passwordSpecial;
      }
      // If user doesn't enter anything
      else if (specialInput === null) {
        window.alert("Please enter either YES or NO");
        promptSpecial();
      }
      // If user enters anything else
      else {
        window.alert("Please enter either YES or NO");
        promptSpecial();
      }
}

// Generate Password function
function generatePassword() {
  // Runs prompt functions
  promptLength();
  console.log(passwordLength);
  promptCase();
  console.log(passwordCase);
  promptNumbers();
  console.log(passwordNumbers);
  promptSpecial();
  console.log(passwordSpecial);


  // Character type declarations
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numbersChar = "1234567890";
  var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  // By default, password is just made up of lowercase letters
  var password = "";
  var characters = lowercaseChar;
  // If user wants to add uppercase letters, numbers, and special characters
  if (passwordCase && passwordNumbers && passwordSpecial) {
    characters += uppercaseChar + numbersChar + specialChar;
  }
  // If user wants to add just uppercase letters and numbers
  else if (passwordCase && passwordNumbers) {
    characters += uppercaseChar + numbersChar;
  }
  // If user wants to add just uppercase letters and special characters
  else if (passwordCase && passwordSpecial) {
    characters += uppercaseChar + specialChar;
  }
  // If user wants to add just upper case letters
  else if (passwordCase) {
    characters += uppercaseChar;
  }
  // If user wants to add just numbers and special characters
  else if (passwordNumbers && passwordSpecial) {
    characters += numbersChar + specialChar;
  }
  // If user wants to add just numbers
  else if (passwordNumbers) {
    characters += numbersChar;
  }
  // If user just wants special characters
  else {
    characters += specialChar;
  }

  // Generate random password meeting requested conditions of user
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(password);
  return password;
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
