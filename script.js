// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = (prompt("password length 8-128?"));
  if (passwordLength > 128 || passwordLength < 8) {
    generatePassword()
  }




  var specialCharacters = confirm("do you want to use special characters?");

  var upperCharacters = confirm("do you want upper case?");
  var lowerCharacters = confirm("do you want lower case?");
  var numCharacters = confirm("do you want numbers?");

  


console.log(upperCharacters)
if (specialCharacters === false && upperCharacters === false && lowerCharacters === false && numCharacters === false){
  generatePassword()
}
  return "password"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
