/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Leah Harris
      Date: 02-09-2024

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0]="International Space Station fourth expansion [2009]";
captions[1]="Assembling the International Space Station [1998]";
captions[2]="The Atlantis docks with the ISS [2001]";
captions[3]="The Atlantis approaches the ISS [2000]";
captions[4]="The Atlantis approaches the ISS [2000]";
captions[5]="International Space Station over Earth [2002]";
captions[6]="The International Space Station first expansion [2002]";
captions[7]="Hurricane Ivan from the ISS [2008]";
captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
captions[9]="The International Space Station from above [2006]";
captions[10]="Maneuvering in space with the Canadarm2 [2006]";
captions[11]="The International Space Station second expansion [2006]";
captions[12]="The International Space Station third expansion [2007]";
captions[13]="The ISS over the Ionian Sea [2007]";

//Declaring variable to empty text string
let htmlCode = "";

//Main for loop to iterate through captions array
for(i = 0; i < captions.length; i++) {
  //Adding text to htmlCode variable. Note: In step 4, the 3rd line of text in the book
  //shows "<figcaption>caption[i]</figcaption>" instead of "captions[i]" plural.
  //I'm unsure if this is a mistake or intentional, but I added the "s" to match the intended variable.
  htmlCode += "<figure>\
              <img alt='' src='slide" + i + ".jpg' />\
              <figcaption>" + captions[i] + "</figcaption>\
              </figure>";
}
//Changing the HTML element of "gallery" to the htmlCode variable
document.getElementById("gallery").innerHTML = htmlCode;


