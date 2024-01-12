let theInput = document.getElementById("favcolor");
let changeColor = document.getElementById("changeColor");
let workingStatusEl = document.getElementById("fontFamilySelect");

var theColor = null;
var fontstyle = "Georgia,serif";

let originalSize = 25;
let updatedSize = "25px";

theInput.addEventListener("input", function() {
    theColor = theInput.value;
}, false);

workingStatusEl.addEventListener("change", function(event) {
    fontstyle = event.target.value;
});

let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

function onIncrement() {
    originalSize = originalSize + 5;
    updatedSize = originalSize + "px";
}

function onDecrement() {
    originalSize = originalSize - 5;
    updatedSize = originalSize + "px";
}

function myFunction() {
    changeColor.style.color = theColor;
    changeColor.style.fontFamily = fontstyle;
    changeColor.style.fontSize = updatedSize;
}

function removeAdd() {
    changeColor.classList.toggle('colo');
}