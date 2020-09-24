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
  var pwdStr = "placeholder"; //placeholder for the finished password
  var includeLower = confirm("Would you like to include lower case characters?");
  var includeUpper = confirm("Would you like to include upper case characters?");
  var includeSymbol = confirm("Would you like to include special characters?");
  var includeNumber = confirm("Would you like to include numaric characters?");
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  function getRand(string, num) {
    var chunk = ""
    for (var i = 0; i < num; i++){
      chunk += string.charAt();
    }
    return chunk
  }
  
  console.log(chunk)
  return (pwdStr); //this delivers the final password
}