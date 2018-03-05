$(document).ready(function() {
  $("#open-menu").click(function() {
    $("aside").animate({
      "left": 0
    }, 1000);
  });
});


$(document).ready(function() {
  $("#close-menu").click(function() {
    $("aside").animate({
      "left": "-100\%"
    }, 1000);
  });
});