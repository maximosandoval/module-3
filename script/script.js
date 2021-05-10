// Assignment Code
//Assigned variables
var generateBtn = document.querySelector("#generate");

//Variable characters used to fulfill the password generator content
var upperChar = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";

var lowerChar = "abcdefghijklmnopqrstuvwxyz";

var specialChar = "!#$%^&*()+=<>_^&*~";

var numberChar = "0123456789";

//Empty variable to pass the value
var passChar = "";

// The arrow below writes the password to the password form field on the HTML
const writePassword = () => {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
//Alert prompt
// alert("You need to choose a number between 8 -128.");
// return;

//Generate password event listner set to the behavior "click"
generateBtn.addEventListener("click", writePassword);

//Function to run the following: password length, generate password, empty string, user cancels out all choices, etc.
function generatePassword() {
  var newPassword = "";
  var passwordLength = prompt(
    "How long would you like your password. Choose from 8 - 128 characters?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    return generatePassword();
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerChar = confirm("Include lowercase letters?");
    var upperChar = confirm("Include uppercase letters?");
    var specialChar = confirm("Include special characters?");
    var numberChar = confirm("Include numbers?");
  }
  if (!lowerChar && !upperChar && !specialChar && !numberChar) {
    alert("You must select some characters!");
    return generatePassword();
  }

  // adding character selection to passwordCharacters variable
  if (lowerChar) {
    passChar = passChar + lowerCase;
  }
  if (upperChar) {
    passChar = passChar + upperCase;
  }
  if (specialChar) {
    passChar = passChar + specialCharacters;
  }
  if (numberChar) {
    passChar = passChar + numbers;
  }
  console.log(passChar);
  var newPassword = "";
  // Math floor loop to generate password with end user choices
  for (var i = 0; i < passwordLength; i++) {
    newPassword += passChar.charAt(Math.floor(Math.random() * passChar.length));
  }
  // Places new password to the page
  return newPassword;
}
