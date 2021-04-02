# 03 Home-Work-Assignment
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Password-Generator
Using Javascript created a password generator application
that generated the random password which is very secured
and included lowercase letters,uppercase letters, numbers
and special characters based on the user input through a series 
of prompts and confirm boxes

## Mockup
The below screenshot shows the overview of the application
![demo](Assets/03-javascript-homework-demo.png)

The flow of the application begins , when the user clicks the generate password button,
it shows the prompt for the user to choose a password length  between 8 and 128
![prompt1](Assets/prompt1.PNG)

If the user chooses the password length less than 8 or more than 128 a prompt appears to validate user input
or not any valid input
![validation1](Assets/validation1.PNG)

confirm box to include lowercase letters
![confirmlower](Assets/confirmlow.PNG)

confirm box to include uppercase letters
![confirmupper](Assets/confirmupper.PNG)

confirm box to include numbers
![confirmnumber](Assets/confirmnumber.PNG)

confirm box to include specialCharacters
![confirmspecial](Assets/confirmspecial.PNG)

If the user does not choose either uppercase or lowercase or numbers or special characters
a prompt appers to choose aleast one character type
![validation2](Assets/validation2.PNG)

once the user confirms the series of prompts a random password is generated inside the textArea based on 
user's choice of character type
![generatedpassword](Assets/generatedpassword.PNG)

###Github page 
[password-generator live](https://selvivini.github.io/password-generator/)
