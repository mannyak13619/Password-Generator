// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase="abcdefghijklmnopqrstuvwxyz"
var randomCharacters="!@#$%&*"
var numbers="123456789"

function generatePassword() {
  var chars=""
  var passwordLength = (prompt("password length 8-128?"));
  if (passwordLength > 128 || passwordLength < 8) {
    generatePassword()
  }




  var specialCharacters = confirm("do you want to use special characters?");

  var upperCharacters = confirm("do you want upper case?");
  var lowerCharacters = confirm("do you want lower case?");
  var numCharacters = confirm("do you want numbers?");

  if (specialCharacters){
    chars+=randomCharacters
  }
  if (lowerCharacters){
    chars+=lowerCase

  }

  if (upperCharacters){
    chars+=upperCase
  }
  if (numCharacters){
    chars+=numbers
  }

console.log(upperCharacters)
if (specialCharacters === false && upperCharacters === false && lowerCharacters === false && numCharacters === false){
  generatePassword()
}
var password=""
for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
  
 }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
