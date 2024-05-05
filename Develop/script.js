// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXWY';
var numbers = '0123456789'
var symbols = '!@#$%^&*()_+';


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
alert('hello')
var passwordLenght = prompt("Please enter a password lenght between 8 and 128 characters");
console.log(passwordLenght);


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
