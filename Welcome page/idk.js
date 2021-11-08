const colorPicker = document.getElementById("colorpicker");
const body = document.querySelector("body");

setInterval(function () {
  body.style.color = colorPicker.value;
}, 1000);
