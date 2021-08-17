canvas = document.getElementById("canvious");
ctx = canvas.getContext("2d");
var colour = "purple"
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
