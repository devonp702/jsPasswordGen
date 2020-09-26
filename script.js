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
  alert("You are about to see some messages. Please read them and choose your answers to customize your password");
  // declaring variables that customize the output
  var pwdStr = ""; //placeholder for the finished password
  var includeLower = confirm("Would you like to include lower case characters?");
  var includeUpper = confirm("Would you like to include upper case characters?");
  var includeSymbol = confirm("Would you like to include special characters?");
  var includeNumber = confirm("Would you like to include numeric characters?");
  var pwdLen = prompt("How many characters would you like to include? Please choose between 8 and 128.");
  // Makes sure the password length is a valid number
  function checkLength(n) {
    if (n < 129 && n > 7) {
      return true;
    } else {
      alert("Please enter a valid number.")
    }
  }


  //variables used in generating the password
  var numbers = "0123456789";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var getNum = 0;

  function getRand(string, num) { // returns some characters from each list
    var chunk = ""; //where the random characters become a string
    for (var i = 0; i < num; i++) {
      chunk += string.charAt(Math.floor(Math.random() * string.length));
    }
    return chunk;
  }

  function sectorizor(number) { //gets us a mostly even distribution of the included character types
    var sctrs = 0; //placeholder, gets added to for every kind of character needed
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
    getNum = Math.floor(number / sctrs); // total number of characters divided by kinds
    return getNum;
  }

  // function randomize(string) { //using Fisher Yates Shuffle
  //   var mixer = string.split(" "); // break password into an array
  //   var i = 0; // the length of the array
  //   var j = 0; // a random number
  //   var temp = null; // the place holder for the swap.
  //   for (i = (pwdStr.length)*2 - 1; i > 0; i -= 1) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     temp = mixer[i]; // the first number is now going to shuffle
  //     mixer[i] = mixer[j]; // the first one is replaced with a random one
  //     mixer[j] = temp; //the random character, becomes the next to swap.
  //   }
  //   pwdStr = mixer.toString(); // put the array back into a string.
  //   pwdStr = pwdStr.replace(",", null);
  //   return pwdStr; //deliver the package
  // }

  function checkPass(string) { //Did The numbers round out ok?
    if (pwdStr.length > pwdLen) { // Too long? chop it down
      pwdStr = pwdStr.slice(0, pwdLen);
      checkPass(pwdStr);
    } else if (pwdStr.length < pwdLen) { // too short? pad it out with some random repeats
      pwdStr += pwdStr.charAt(Math.floor(Math.random() * pwdStr.length));
      checkPass(pwdStr);
    } else {
      return string;
    }
  }

  if (checkLength(pwdLen)) { //was the input valid?
    sectorizor(pwdLen); // Then lets start the process!
  }

  if (includeLower) {
    pwdStr += getRand(lowers, getNum); // get some lower case
  }
  if (includeUpper) {
    pwdStr += getRand(uppers, getNum); //get some upper case
  }
  if (includeNumber) {
    pwdStr += getRand(numbers, getNum); // get some numbers
  }
  if (includeSymbol) {
    pwdStr += getRand(specials, getNum); // get some symbols
  }
  checkPass(pwdStr); // is it the correct length?
  // randomize(pwdStr); // randomize final string
  return (pwdStr); //this delivers the final password
}