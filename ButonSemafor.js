const button = document.getElementById("semafor");
let index = 1;
function changeColor() {
    if (index == 1) {
        button.className= "btn btn-warning btn-lg";
    } else if (index == 2) {
        button.className= "btn btn-success btn-lg";
    } else if (index == 3) {
        button.className= "btn btn-danger btn-lg";
    }
    if (index == 3) {
        index = 0;
    }
    ++index;
}
button.addEventListener("click", changeColor);
setInterval(changeColor, 10000);
