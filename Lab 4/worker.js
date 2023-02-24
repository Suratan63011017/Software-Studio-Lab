var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
var currentIndex = 0;

function getColor() {
  var currentColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
  return currentColor;
}

var currentIndex = 0;
var intervalID;

function startUpdatingTime() {
  intervalID = setInterval(function () {
    var now = new Date();
    var color = getColor();
    postMessage({ date: now, color: color });
    console.log(color);
  }, 1000);
}

function stopUpdatingTime() {
  clearInterval(intervalID);
}

onmessage = function (event) {
  if (event.data === "start") {
    startUpdatingTime();
  } else if (event.data === "stop") {
    stopUpdatingTime();
  }
};
