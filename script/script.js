// Assignment Code
//Assigned variables
var generateBtn = document.querySelector("#generate");

var UpperChar = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";

var LowerChar = "abcdefghijklmnopqrstuvwxyz";

var specialChar = "!#$%^&*()+=<>_^&*~";

var numberChar = "0123456789";

var passChar = "";

var finalArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  prompt(
    "Should you be coding right now? Find the most diffcult technique. Practice it. Is there someone better than you? Keep practicing. Find someone better than you. Keep practicing. You just finished coding. Go to bed. Wake up. Keep coding. Are you practicing right now. Good. Don't stop. "
  );
}

// function presentPrompts() {
//   prompt("question?");
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generateItems() {
  //Lenght of end users password
  var pLength = prompt("Select a password from 8-128 characters.");

  //Password not proper length
  if (pLength < 8 || pLength > 128) {
    alert("Please select a password between 8-128 characters.");
    return;
  } else if (pLength >= 8 && pLength <= 128) {
    //Insert all other confirms here
    var lowercaseNum = confirm("Include lower case letters");
    var UpperChar = confirm("Include lower case letters");
    var specialChar = confirm("Include lower case letters");
    var numberChar = confirm("Include lower case letters");
  }
  //Write logic in here
  //Check for true or false of all var's

  //If they come back true then they have to be placed into a useable string
}

//Function create password
function createPassword(pWord) {
  var anyNumber = Math.floor(Math.random() * pWord.length);
  var anysymbol = pWord[anyNumber];
  return anysymbol;
}
// Function generate password
function generatePassword() {
  var userItems = generateItems(); //This is a function I need to write
  console.log(userItems);
  var randompassword = [];
  var items = [];
}
