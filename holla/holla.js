function clamp(x) {
  if (x > 1.0) x = 1.0;
  if (x < 0.0) x = 0.0;
  return x;
}

function hue(h) {
  c = [0, 0, 0];

  h = (h % 1.0) * 3.0;

  f = 2.0 * (h % 1.0);
  g = 2.0 - f;

       if (h < 1) { c[0] = g; c[1] = f; c[2] = 0; }
  else if (h < 2) { c[0] = 0; c[1] = g; c[2] = f; }
  else            { c[0] = f; c[1] = 0; c[2] = g; }

  c[0] = 255 * clamp(c[0]);
  c[1] = 255 * clamp(c[1]);
  c[2] = 255 * clamp(c[2]);

  return c;
}

function linear(A, x, b) {
  A[0] = A[0] * x + b;
  A[1] = A[1] * x + b;
  A[2] = A[2] * x + b;
  return A;
}

function toColor(A) {
  return "rgb("
    + Math.floor(A[0]) + ","
    + Math.floor(A[1]) + ","
    + Math.floor(A[2]) + ")";
}

$(function() {
  var fxDelay = 10;

  var mouseX = 0;
  var mouseY = 0;

  var dudes = [];

  var start = new Date().getTime();

  for (var i=0; i<10; i++) {
    var img = $("<img>");
    img.attr("src", "lolol.gif");
    img.addClass("dude");
    $("body").append(img);
    dudes += [img];
  }

  function fx() {
    var time = (new Date().getTime() - start) / 1000;

    $(".dude").css("left", function (i,v) {
      return ($(window).width() - 100) * Math.random();
    });
    $(".dude").css("top", function (i,v) {
      return ($(document).height() - 100) * Math.random();
    });

    function jiggle(i,v) { return Math.random() * 14 - 7; };
    $(".wow").css("left", jiggle);
    $(".wow").css("top", jiggle);

    $(".wtf").css("fontSize", function(i,v) {
      return (Math.random() + 3.0) * (10 + time / 3.0) + "pt";
    });
    $(".zomg").css("fontSize", function(i,v) {
      return (Math.random() + 3.0) * 10 + "pt";
    });

    $("body").css("background", function(i,v) {
      return toColor(linear(hue(Math.random()), .5, .2 * 255)); });
    $(".wow").css("color", function(i,v) {
      return toColor(linear(hue(Math.random()), .6, .4 * 255)); });

    $(".YES").css("width", function(i,v) {
      return 250 * (Math.sin((time + i) * 7) + 1.4); });
    $(".YES").css("left", function(i,v) {
      return 100 * Math.sin((time + i) * 8); });

    setTimeout(fx, fxDelay);
  }

  fx();
});
