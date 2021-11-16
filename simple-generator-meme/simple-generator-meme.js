const photoPicker = document.getElementById("meme");
const textPicker = document.getElementById("name");
const submit = document.querySelector("button");
const img = document.querySelector("img");
const p = document.querySelector("p");

submit.addEventListener("click", (e) => {
  img.src = window.URL.createObjectURL(photoPicker.files[0]);
  p.innerText = textPicker.value;
});
