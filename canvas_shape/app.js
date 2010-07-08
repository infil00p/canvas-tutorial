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
  if (e.pageX || e.pageY)
  {
    x = e.pageX;
    y = e.pageY;
  }
  else
  {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  x -= cEle.offsetLeft;
  y -= cEle.offsetTop;

}

var setupCanvas = function()
{
  var cEle = x$('#canvas').elements[0];
  ctx = cEle.getContext("2d");
  cEle.addEventListener("click", onCanvasClick, false);
}

function draw() {
  ctx.clearRect(x-15,y-15,30,30);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  
  if (y + dy < height + 20)
    y += dy;
}

document.addEventListener('load', init, true);
