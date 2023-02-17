// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  var index = Math.floor(Math.random() * PushSubscriptionOptions.length);
  var computerChoice = Option [index];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  var passwordLength = prompt ( "password length?")
  var specialCharacters =confirm("do want to use special characters?")
  var numbers =confirm("do you want to use numbers?")
  var doYouwanttocontinue =confirm("do you want to continue creating custom password")
  

}