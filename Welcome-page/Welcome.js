// color picker js//
const colorPicker = document.getElementById("colorpicker");
const body = document.querySelector("body");

// scan color picker//
setInterval(function () {
  body.style.color = colorPicker.value;
}, 1000);

function myFunction() {
  document.getElementById("demo").innerHTML = countDownDate;
}
