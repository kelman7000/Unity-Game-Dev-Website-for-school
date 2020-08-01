$(document).ready(function() {
  // use the Youtube search api to query videos
  $("#btn").click(function() {
    clearResults();
    var request = new XMLHttpRequest();
    // get data from the Youtube API with the specified search term
    request.open('GET', "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=" + 
      encodeURIComponent($("#search").val()).replace(/%20/g, "+") + ""/*your key here*/);
    request.onload = function() {
      addVideos(JSON.parse(request.responseText).items);
    }
    request.send();
  })

  // clear all the videos from previos search
  function clearResults() {
    $("#results").html("");
  }

  // write the html for the videos
  function addVideos(data) {
    // add the queried videos to the page
    $.each(data, function(index, item) {
      var url = "https://www.youtube.com/embed/" + item.id.videoId;
      var results = $("#results");
      $(results).append("<h3>" + item.snippet.channelTitle + ": " 
        + item.snippet.title + "</h3>");
      $(results).append("<iframe src=" + url + " frameborder='0'></iframe>");
    })
  }
})


