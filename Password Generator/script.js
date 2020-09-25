function generatePassword(){

  //These are all of the criteria questions for the new password
 var length = prompt("How many characters would you like in your password? (Must be between 8 and 128 characters)"); 
 var lowerCase = confirm("Would you like to include lower case letters?");
 var upperCase = confirm("Would you like to include upper case letters?");
 var numeric = confirm("Would you like to include numeric values?");
 var special = confirm("Would you like to include special characters?");
  var password = "";

  //Password criteria values
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseLetters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special =["!","@","#","$","%","^","&","*","(",")","_","+"];
var possibleTypes ="";
//var possibleTypes= upperCaseLetters.concat(lowerCaseLetters) (do this for each scenario)


 if ((parseInt(length) >=8 && parseInt(length) <= 128) && (lowerCase || upperCase || numeric || special)) {
   //If these criteria are confirmed, they will be added to the password var which is possible types
   if (lowerCase){
     possibleTypes = possibleTypes.concat(lowerCaseLetters);
   }
   if (upperCase){
     possibleTypes = possibleTypes.concat(upperCaseLetters);
   }
   if (numeric){
    possibleTypes = possibleTypes.concat(numbers);
  }
  if (special){
    possibleTypes = possibleTypes.concat(special);
  }

  //For loop to generate which characters will be chosen at random
  for (var i=0; i < length; i++){
    var random = Math.floor(Math.random() * possibleTypes.length)
    password = password + possibleTypes.parseInt(random);
  }
  return password;
 }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Button connection to HTML
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}