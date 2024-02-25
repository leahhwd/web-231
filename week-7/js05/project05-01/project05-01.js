"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Leah Harris
      Date:   02-23-2024s

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// on click event handler
startQuiz.onclick = function() {
  overlay.className = "showquiz";
  timeID = window.setInterval(countdown, 1000);
}

//main countdown function
function countdown() {
  if (timeLeft === 0) {
    clearInterval(timeID);
    let totalCorrect = checkAnswers();
    if(totalCorrect === correctAnswers.length) {
      window.alert("Congratulations! You got 100%");
    }
      else {
        //In step 6 part C (i) The directions say to create an alert message that shows
        //the number of incorrect answers out of the total. In step 9 it says the message should display the number of
        //correct answers from the total. I was a bit confused on how to display the incorrect answers, and I'm not sure which one the book
        //specifically wanted between the two, so I displayed the totalCorrect.
        window.alert("There are " + totalCorrect + " correct answers out of " + correctAnswers.length);
        let timeLeft = quizTime;
        quizClock.value = timeLeft;
        overlay.className = "hidequiz";
      }
  }
    else {
      --timeLeft;
      quizClock.value = timeLeft;
    }
}





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

