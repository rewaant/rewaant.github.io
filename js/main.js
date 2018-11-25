$(function() {

  var state = true;
  
  $("#sample-work-link").on("click", function(e){
    e.preventDefault();
    if(state == true) {
      $("#body").load("portfolio.html");
      $("#sample-work-link a").text("Back");
      state = false;
    }
    else {
      location.reload();
    }
  })
});