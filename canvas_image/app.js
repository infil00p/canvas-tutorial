var width = 280;
var height = 460;

var ctx = null;
var dy = 1;

var x = width/2;
var y = height/2;

var preventBehavior = function(e)
{
  e.preventDefault();
}

var canvasStart = function()
{
  setupCanvas();
  setInterval(draw, 10);
}

var onCanvasClick = function(e)
{
  ctx.clearRect(0,0,width, height);
  getCursorPosition(e);
}

var getCursorPosition = function(e)
{
  var cEle = x$('#canvas').elements[0];
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;
  
  x -= cEle.offsetLeft;
  y -= cEle.offsetTop;

}

var setupCanvas = function()
{
  var cEle = x$('#canvas').elements[0];
  ctx = cEle.getContext("2d");
  cEle.addEventListener("touchstart", onCanvasClick, false);
}

function draw() {
  ctx.clearRect(x-25,y-25,100,100);
  var snowflake = new Image();
  snowflake.src = "snowflake.png";
  ctx.drawImage(snowflake, x, y);
  if (y + dy < height + 20)
    y += dy;
}

document.addEventListener('load', init, true);
