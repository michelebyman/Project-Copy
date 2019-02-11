// NAV - toggle(function() {
$('#nav-toggle, #shadow').click(function() {
  $(".menu, #shadow").animate({
    opacity: 1,
    width: "toggle"
  }, 300, function() {
    // Animation complete.
  });
  //$(".btn-primary, .jumbotron").css("opacity", "0.7");
});
