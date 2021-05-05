// Assignment Code
//Assigned variables
var generateBtn = document.querySelector("#generate");

var upperChar = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";

var lowerChar = "abcdefghijklmnopqrstuvwxyz";

var specialChar = "!#$%^&*()+=<>_^&*~";

var numberChar = "0123456789";
//Empty variable to pass the value
var passChar = "";

// Write password to the #password input
//If they come back true then they have to be placed into a useable string
function generatePassword() {
  var length = prompt("Please select between 8-128");
  if (length < 8 || length > 128) {
    alert("Please select between 8-128");
    return;
  }
  lowerCaseSelected = confirm("You want upper case?");
  upperCaseSelected = confirm("You want upper case?");
  specialCaseSelected = confirm("You want upper case?");
  numberCaseSelected = confirm("You want upper case?");
  if (
    !lowerCaseSelected &&
    !upperCaseSelected &&
    !specialCaseSelected &&
    !numberCaseSelected
  ) {
    //Alert prompt
    alert("You need to choose one.");
    return;
  }
}

//Assigns a password to the password box. Returns the function of generate password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //   // prompt(
  //   //   "Should you be coding right now? Find the most diffcult technique. Practice it. Is there someone better than you? Keep practicing. Find someone better than you. Keep practicing. You just finished coding. Go to bed. Wake up. Keep coding. Are you practicing right now. Good. Don't stop. "
  //   // );
  // }

  // function presentPrompts() {
  // prompt("question?");
  // }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  function generateItems() {
    //Lenght of end users password
    var pLength = prompt("Select a password from 8-128 characters.");

    //Password not proper length
    if (pLength < 8 || pLength > 128) {
      alert("Please select a password between 8-128 characters.");
      return generateItems();
    } else if (pLength >= 8 && pLength <= 128) {
      //Insert all other confirms here
      var lowercaseNum = confirm("Include lower case letters.");
      var upperChar = confirm("Include upper case letters.");
      var specialChar = confirm("Include special case letters.");
      var numberChar = confirm("Include numbers.");
    }
    //Write logic in here
    //Check for true or false of all var's
    var arrayFunction = function () {
      if (lowercaseNum) {
        finalArray = finalArray.concat(lowercaseNum);
      }
      if (upperChar) {
        finalArray = finalArray.concat(upperChar);
      }
      if (specialChar) {
        finalArray = finalArray.concat(specialChar);
      }
      if (numberChar) {
        finalArray = finalArray.concat(numberChar);
      }
      console.log(finalArray);
      return finalArray;
    };

    function randomChar(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    //JS array concat to join arrays
    arrayFunction();
    for (i = 0; i <= length; i++) {
      password = password.concat(randomChar(finalArray));
    }
    return password;
  }
  //Function create password
  //May have tochange slightly based on how functions are organized
  function createPassword(pWord) {
    var anyNumber = Math.floor(Math.random() * pWord.length);
    var anysymbol = pWord[anyNumber];
    return anysymbol;
  }
  // Function generate password
  // function generatePassword() {
  // var userItems = generateItems();

  //Event Listner for button click
  generateBtn.addEventListener("click", writePassword);

  console.log(userItems);
  var randompassword = [];
  var items = [];
}
//Look at operation order - what gets activated first, second etc.
// All functions are loading into the doc until they get called on
