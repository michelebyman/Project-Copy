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

let textAnimation = document.createElement("h4");
textAnimation.textContent = "";
let textContainer = document.querySelector('.kalle');
textContainer.appendChild(textAnimation);


let textMessage = "Hej vi testar testanimation";
var speed = 100;
let i = 0;
function animatedText() {

  if (i < textMessage.length) {
    textAnimation.innerHTML += textMessage.charAt(i);
    i++;
    setTimeout(animatedText, speed);
  }
};

animatedText();
