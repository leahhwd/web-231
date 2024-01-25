/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Leah Harris
      Date:  01-25-24

      Filename: project02-04.js
 */


/*Declaring global constants*/

const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

/*On click event handler*/

document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

/* Main calculation function*/

function calcTotal() {
  /* Setting inital value to 0*/
  let cost = 0;
  /* Declaring variables*/
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;
  /*Adding in values*/
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
  /* Calculate tax*/
  let tax = cost * SALES_TAX;

  document.getElementById("foodTax").innerHTML = formatCurrency(tax);
  /*Combining cost and tax for total price*/
  let totalCost = cost + tax;

  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}


// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
