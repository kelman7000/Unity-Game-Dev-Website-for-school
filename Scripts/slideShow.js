$(document).ready(function() {

  var request = new XMLHttpRequest();
  request.open('GET', "http://student.athabascau.ca/~kelseysa5/COMP266/UserProjects.json");
  request.onload = function() {
    var data = JSON.parse(request.responseText);
    $.each(data, function(index, item) {
      // append mySlides to the slide div
      $("#slide").append("<div class='mySlides'>" +
        "<img src=" + "'"  + item.lgImgUrl + "' alt=''>" +
        "</div>"
      );
        
      var alt = item.projectName + " by " + item.creator;  // alt tag in of the image

      // append the small img to the list
      $("#img-select").append("<div class='column'><img class='demo cursor'" +
        "src=" + "'"  + item.smlImgUrl + "' style='width:100%'" + 
        "onclick='currentSlide("+ index +")' alt=" + "'" + alt + "'" + "></div>"
      );
    })
    showSlides(0);
  }
  request.send();
})

/*
  code from w3schools.com
  url: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery
  written by: Unknown
  published: Unknown
*/

var slideIndex = 0;

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n
  showSlides(slideIndex);
}

// show only one image at a time
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = 0}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  captionText.innerHTML = dots[slideIndex].alt;
} 
