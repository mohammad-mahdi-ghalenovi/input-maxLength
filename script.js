let inputElem = document.getElementById("input");
let numberElem = document.querySelector(".number");
function keyDownHandler() {
  numberElem.innerHTML =
    inputElem.getAttribute("maxlength") - inputElem.value.length;
}
inputElem.addEventListener("keyup", keyDownHandler);
