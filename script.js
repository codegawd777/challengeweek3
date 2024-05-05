// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXWY';
var numbers = '0123456789'
var symbols = '!@#$%^&*()_+';
var pool =''
var password =''


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Added generatePassword function

function generatePassword() {
alert('hello')
var passwordLenght = prompt("Please enter a password lenght between 8 and 128 characters");
console.log(passwordLenght);
var passwordLenghtInt = parseInt(passwordLenght)

// added if statement
if(passwordLenght < 8 || passwordLenght > 128) {
  alert('Please eneter a password length between 8 and 128 characters');
  return password;

}

var lowercaseConfirm = confirm("Do you want to include lowercase letter?");
console.log(lowercaseConfirm);
if(lowercaseConfirm){
  pool += lowercase;
  
  console.log(pool);
}
var uppercaseConfirm = confirm("Do you want to include uppercase letter?");
console.log(uppercaseConfirm);
if(uppercaseConfirm){
  pool += uppercase;
  
  console.log(pool);
}
var numbersConfirm = confirm("Do you want to include numbers?");
console.log(numbersConfirm);
if(numbersConfirm){
  pool += numbers;
  
  console.log(pool);
}
var symbolsConfirm = confirm("Do you want to include symbols?");
console.log(symbolsConfirm);
if(symbolsConfirm) {
  pool += symbols;

}
//Added if statement to return message if no characters are selected

  if(!lowercaseConfirm && !uppercaseConfirm && !numbersConfirm && !symbolsConfirm){
    alert('Please select at least one type of character');
    return password;

  }
  
  console.log(pool);




// Added for loop
// Pool = [abcdef...z,] 26, 
  // randomnumber: 0-1, 0.10
  // multiplied randomnumber: 0*25, 2.6
  // interger part0-25
  for(var i = 0; i < passwordLenghtInt; i++){
  //Between 0 and 1 :0.1  
  var randomNumber = Math.random()  
  var index = Math.floor(randomNumber * pool.length) // Genarate random number between 0 and 1: 0.11
  var randomChar = pool[index];
  console.log(randomChar);
  password += randomChar;

  
  }
return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
