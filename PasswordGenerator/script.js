//Button connection to HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //These are all of the criteria questions for the new password
  var length = prompt("How many characters would you like in your password? (Must be between 8 and 128 characters)"); 
  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include upper case letters?");
  var numeric = confirm("Would you like to include numeric values?");
  var special = confirm("Would you like to include special characters?");
  var result = "";

  //Password criteria values
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters= "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "!@#$%^&*()_+";
  var possibleTypes ="";
  //var possibleTypes= upperCaseLetters.concat(lowerCaseLetters) (do this for each scenario)

  if ((length >=8 && length <= 128) && (lowerCase || upperCase || numeric || special)) {
    //If these criteria are confirmed, they will be added to the password var which is possible types
    if (lowerCase){
      possibleTypes = possibleTypes + lowerCaseLetters;
    }
    if (upperCase){
     possibleTypes = possibleTypes + upperCaseLetters;
    }
    if (numeric){
      possibleTypes = possibleTypes + numbers;
    }
    if (special){
      possibleTypes = possibleTypes + special;
    }
    //For loop to generate which characters will be chosen at random
    for (var i=0; i < length; i++){
      var random = Math.floor(Math.random() * possibleTypes.length)
      result = result + possibleTypes.charAt(random);
    }
    return result;
  }
  else {
    alert("You must include a number between 8 and 128 and select at least one criteria.")
  }
 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);