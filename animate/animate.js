$(document).ready(animate);

function animate() {
  $("#pc-wave-inside").fadeIn();
  $("#pc-splash").delay(200).fadeIn();
  $("#pc-splash2").delay(200).fadeIn();
  $("#pc-wave-top").delay(300).toggle("blind", { direction: "right", duration: 600 });
  $("#pc-wave-top2").delay(300).toggle("blind", { direction: "right", duration: 600 });
  $("#surfer-wave").delay(450).toggle("blind", { direction: "right", duration: 600 });
  $("#big-wave").delay(400).toggle("blind", { direction: "right", duration: 1200 });
  $("#tablet-wave-inside").delay(800).toggle("blind", { direction: "down" });
  $("#iphone-wave-inside").delay(1100).toggle("blind", { direction: "right" });
  $("#iphone-wave-top").delay(1000).toggle("blind", { direction: "down" });
  $("#pc-surfer").delay(200).show("slide", { direction: "right" });
  $("#pc-splash3").delay(400).fadeIn();
  $("#pc-surfer").animate({ top: 280, left: 400 }, function() {
    $(this).fadeOut();
    $("#tablet-splash").fadeIn();
    $("#pc-splash1").fadeOut();
    $("#pc-splash2").fadeOut();
    $("#pc-splash3").fadeOut();
  });
  $("#tablet-surfer").rotate(-50);
  $("#tablet-surfer").delay(800).fadeIn(function() {
    $(this).animate({ top: 350, left: 290 }, function() {
      $(this).rotate({
        duration: 1000,
        angle: -50,
        center: ["-20px", "10px"],
        animateTo: 400
      });
      $("#tablet-splash").fadeOut();
      $("#tablet-splash2").fadeIn();
      $("#tablet-splash2").delay(500).fadeOut();
      $(this).delay(600).animate({ top: 175, left: 125, width: 50, height: 50 });
      $(this).fadeOut();
      $("#iphone-surfer").delay(900).fadeIn(function() {
        $(this).animate({ left: 40 });
        $("#iphone-splash2").fadeIn(function() {
          $(this).delay(200).fadeOut();
        });
      });
      $("#iphone-splash").delay(800).toggle("blind", { direction: "right" }, function() {
        $(this).delay(500).toggle("blind", { direction: "right" });
      });
    });
  });
}

