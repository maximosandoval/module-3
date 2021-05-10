// Assignment Code
//Assigned variables
var generateBtn = document.querySelector("#generate");

//Variable characters used to fulfill the password generator content
var upperChar = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";

var lowerChar = "abcdefghijklmnopqrstuvwxyz";

var specialChar = "!#$%^&*()+=<>_^&*~";

var numberChar = "0123456789";

//Empty variable to pass the value

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
  var passChar = "";
  var passwordLength = prompt(
    "How long would you like your password. Choose from 8 - 128 characters?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    return generatePassword();
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCheck = confirm("Include lowercase letters?");
    var upperCheck = confirm("Include uppercase letters?");
    var specialCheck = confirm("Include special characters?");
    var numberCheck = confirm("Include numbers?");
  }
  if (!lowerCheck && !upperCheck && !specialCheck && !numberCheck) {
    alert("You must select some characters!");
    return generatePassword();
  }

  // adding character selection to passwordCheckacters variable
  if (lowerCheck) {
    passChar = passChar + lowerChar;
  }
  if (upperCheck) {
    passChar = passChar + upperChar;
  }
  if (specialCheck) {
    passChar = passChar + specialChar;
  }
  if (numberCheck) {
    passChar = passChar + numberChar;
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
