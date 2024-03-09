"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Leah Harris
      Date:   07-03-2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   //command to prevent browser from responding
   e.preventDefault();

   //regular expression variables
   let regex1 = /[A-Z]/;
   let regex2 = /\d/;
   let regex3 = /[!\$#%]/;

   //if else statement to check password contents
   if(pwd.length < 8){
     feedback.textContent = "Your password must be atleast 8 characters";
   } else if (regex1.test(pwd) === false){
     feedback.textContent = "Your password must include an uppercase letter";
   } else if (regex2.test(pwd) === false){
     feedback.textContent = "Your password must include a number";
   } else if (regex3.test(pwd) === false){
     feedback.textContent = "Your password must include one of the following: !$#%";
   } else {
     signupForm.onsubmit();
   }
}
);