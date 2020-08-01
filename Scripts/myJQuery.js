$(document).ready(function() {
  closeSideNav();

  // toggle for the section challenge solutions
  $(".solution-button").click(function() {
    var parent = this.parentElement;
    $(parent.children[1]).toggle();
  })

  // display some img and its description in a window at the center of the screen
  $("img").click(function() {
    /* only let the image be clickable if the screen size is large enough
    not to distort the image */
    if(screen.width >= 700){
      var imgURL = this.getAttribute('src');
      var imgAlt = this.getAttribute("alt");
      $("#image-over").fadeIn("slow");
      var img = document.getElementById("click-img");
      img.setAttribute("src", imgURL);
      $("#img-alt").text(imgAlt);
    }
  })

  $("#close-btn").click(function() {
    $("#image-over").fadeOut("slow");
  })

  //#region side nav on mobile
  var maxScreenWidth = window.matchMedia("(min-width: 600px)");

  // add blur to the content
  function blur() {
    $("#panel").css({"transition": "1s", "filter": "blur(8px)", 
      "webkitFilter": "blur(8px)"});
  }

  // remove blur from content
  function noBlur() {
    $("#panel").css({"transition": "1s", "filter": "blur(0px)", 
      "webkitFilter": "blur(0px)"});
  }

  // the user want to open the side navbar
  $("#show-side-nav").click(function() {
    openSideNav();
  })

  // open the side navbar
  function openSideNav() {
    $("#left-navbar").css({"visibility": "visible", "position": "fixed",
      "transition": "0.3s", "width": "50%", "zindex": "2"});
    $("#footer").css("display", "none");
    blur();
    $("#show-side-nav").css("visibility", "hidden");
  }

  // close the side navbar
  function closeSideNav() {
    $("#left-navbar").css({"transition": "0.3s", "width": "0",
      "position": "fixed"});
    $("#panel").css("position", "center");
    $("#footer").css("display", "block");
    noBlur();
    $("#show-side-nav").css("visibility", "visible");
  }

  // get all the list elements and add a click function
  var list = document.getElementById("left-navbar").children[0].children;
  for(var i = 0; i < list.length; i++){
    $(list[i]).click(function() {
      closeSideNav();
    })
  }

  // the screen was resized to be larger while the side nav was open
  function screenWidthChange() {
    if(maxScreenWidth.matches) {
      closeSideNav();
    }
  }

  maxScreenWidth.addListener(screenWidthChange);
  //#endregion
})
