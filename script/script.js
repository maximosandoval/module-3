// Assignment Code
var generateBtn = document.querySelector("#generate");
//All the characters the user can choose from to create a password
var lcCharacters = "abcdefghijklmnopqrstuvwxyz";
var upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharacters = "0123456789";
var spCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
​
 var newPassword = "";
//var passChars = "";
​
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
​
  passwordText.value = password;
}
​
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
​
function generatePassword() {
  //Setting up undefined variables for the new password
  var newPassword = "";
​
  //Get the length of the password
  var pLength = prompt(
    "How many characters would you like to include in your password?"
  );
​
  //If the password is not between 8 and 128 characters, return to the prompt
  if (pLength < 8 || pLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  } else if (pLength >= 8 && pLength <= 128) {
    //Does the user want lowercase letters
    var lowercaseNum = confirm("Include lowercase letters?");
​
    //If yes, add the characters to the password characters array
    if (lowercaseNum) {
      passChars = passChars + lcCharacters;
      console.log(passChars);
    }
    //Does the user want uppercase letters
    var uppercaseNum = confirm("Include upper case letters?");
​
    //if yes, add the characters to the password array
    if (uppercaseNum) {
      passChars = passChars + upCharacters;
      console.log(passChars);
    }
​
    //Does the user want numbers
    var numCharNum = confirm("Include numbers?");
​
    //If yes, add it to the password array
    if (numCharNum) {
      passChars = passChars + numCharacters;
      console.log(passChars);
    }
​
    //Does the user want special characters
    var specialNum = confirm("Include special characters?");
​
    //If yes, add it to the password array
    if (specialNum) {
      passChars = passChars + spCharacters;
      console.log(passChars);
    }
​
    //If the user doesnt choose any, prompt them, then start over
    if (passChars === "") {
      alert("You must select characters");
    }
​
    //from the created array choose random items for the length that is given.
    for (var i = 0; i < pLength; i++) {
      newPassword += passChars.charAt(
        Math.floor(Math.random() * passChars.length)
      );
    }
    console.log(newPassword);
    return newPassword; //Return the password
  }
}