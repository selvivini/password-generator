// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // prompt to enter a password length
  var passwordLength = prompt("choose a password length between 8 and 128");
  if(!passwordLength || passwordLength<8 || passwordLength>128){
       alert("please enter a valid number between 8 and 128")
  }
  //prompt to choose a character type
  var lowercase = confirm("Do u want to include lowerCase letters?");
  var uppercase = confirm("Do u want to include upperCase letters?");
  var numbers = confirm("Do u want to include numbers?");
  var specialcharacters = confirm("Do u want to include Specialcharacters");
  if(!lowercase && !uppercase && !numbers && !specialcharacters){
    alert("please choose atleast one character type")
  }
  // creating an arrayof charcodes and assigning it to a variable based on user input
  var charcodes= [];
   var lower_charcode= arrayLowtohigh(97,122);
   var upper_charcode= arrayLowtohigh(65,90);
   var number_charcode= arrayLowtohigh(48,57);
   var special_charcode= arrayLowtohigh(33,47).concat(arrayLowtohigh(58,64)).concat(arrayLowtohigh(91,96))
   .concat(arrayLowtohigh(123,126));
   
  //add the different charactercodes array to the charcodes array based on user's choice of character type
   
  if(lowercase){
   charcodes= charcodes.concat(lower_charcode)
   console.log(charcodes)
   }
   if(uppercase ){
   charcodes = charcodes.concat(upper_charcode)
   }
   if(numbers ){
   charcodes = charcodes.concat(number_charcode)
   }
  if(specialcharacters){
  charcodes = charcodes.concat(special_charcode)
  }
  
  //generate a random password based on charcodes selected
  var password=[];
  for( i=0;i<passwordLength; i++){
      var characterCode= charcodes[Math.floor(Math.random()* charcodes.length)];
      password.push(String.fromCharCode(characterCode));
  }
 return password.join('');  
}

 


// function to create an array of charcodes based on user options
 function arrayLowtohigh(low,high){
  var arr= [];
  for(i=low; i<=high; i++){
    arr.push(i);
  }
  return arr;
}
