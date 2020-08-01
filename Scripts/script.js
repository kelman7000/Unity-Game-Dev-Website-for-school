"use strict";

/*code form w3schools.com
url: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav
author: Unknown 
published: unknown
Desc: toggle a class on and off the top navbar element to make it responsive
*/
function topNavCollapse() {
  // the the element with id topnav
  var topnav = document.getElementById("top-navbar");
  if(topnav.className === "row") {
    // add the responsive class to topnav element
    topnav.className += " responsive";
  } else {
    // remove the responsive class from topnav
    topnav.className = "row";
  }
}

// gets the current year
function getYear() {
  var date = new Date();
  var dateText = document.getElementById("date");
  dateText.innerHTML = " " + date.getFullYear();
  
}

getYear();