/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Leah Harris
      Date:  02-01-2024

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");
//For loop to loop through menu choices
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}
//Main function to calculate total cost
function calcTotal() {
  let orderTotal = 0;

  //Evaluating whether menu items are checked.
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }