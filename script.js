// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//the password gets designed here
function generatePassword() {
  alert("You are about to see some messages. Please read them and choose your answers to customize your password")
  // declaring variables that customize the output
  var pwdStr = ""; //placeholder for the finished password
  var includeLower = confirm("Would you like to include lower case characters?");
  var includeUpper = confirm("Would you like to include upper case characters?");
  var includeSymbol = confirm("Would you like to include special characters?");
  var includeNumber = confirm("Would you like to include numeric characters?");
  var pwdLen = prompt("How many characters would you like to include?");
  //variables used in generating the password
  var numbers = "0123456789";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  function getRand(string, num) { // returns some characters from each list
    var chunk = "";
    for (var i = 0; i < num; i++) {
      chunk += string.charAt(Math.floor(Math.random() * string.length));
    }
    return chunk;
  }

  function sectorizor(number) {
    var sctrs = 0;
    if (includeLower) {
      sctrs++;
    }
    if (includeUpper) {
      sctrs++;
    }
    if (includeNumber) {
      sctrs++;
    }
    if (includeSymbol) {
      sctrs++;
    }
    return number/sctrs;
  }

  var getNum = sectorizor(pwdLen)

  if (includeLower) {
    pwdStr += getRand(lowers, getNum);
    if (includeUpper) {
      pwdStr += getRand(uppers, getNum);
    }
    if (includeNumber) {
      pwdStr += getRand(numbers, getNum);
    }
    if (includeSymbol) {
      pwdStr += getRand(specials, getNum);
    }
  }

  return (pwdStr); //this delivers the final password
}