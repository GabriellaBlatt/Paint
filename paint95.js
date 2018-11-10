var color = "lightpink";
var currentSize= 10;

function draw() {
    var pen = document.createElement("div");
    pen.setAttribute("class", "pixel");
    var drawArea = document.getElementById("canvas"); 
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    pen.style.borderRadius = "100%";
    pen.style.left = x + "px";
    pen.style.top = y + "px";
    pen.style.position = "absolute";
    pen.style.backgroundColor = color;
    pen.style.height = currentSize + "px";
    pen.style.width = currentSize + "px";     
    drawArea.appendChild(pen);
}

var colors = document.getElementsByClassName("color");

for (var i=0; i<colors.length; i++){
    colors[i].addEventListener("click", function(){
        color = this.id;
    });
}

var drawArea = document.getElementById("canvas");

drawArea.addEventListener("mousedown", function () {
    drawArea.addEventListener("mousemove", draw);
});

document.addEventListener("click", function () {
    drawArea.removeEventListener("mousemove", draw);
});

var brushSize = document.getElementsByClassName("size");

for(var i=0; i<brushSize.length; i++){
    brushSize[i].addEventListener("click", changeSize);
}

function changeSize(e){
    if (e.target.value === "+"){
        currentSize = currentSize + 2;
    } else if ( currentSize> 2){
        currentSize = currentSize - 2;
    }
}