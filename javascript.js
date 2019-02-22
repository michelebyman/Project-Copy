// NAV - toggle(function() {
$('#nav-toggle, #shadow').click(function() {
  $(".menu").animate({
    opacity: 1,
    width: "toggle"
  }, 200, function() {
    // Animation complete.
  });
  $(".info-links").toggle(201);
  $("#shadow").toggle();
});
