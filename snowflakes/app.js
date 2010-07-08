var width = 280;
var height = 460;

var ctx = null;
var dy = 1;

var x = width/2;
var y = height/2;

var flakes = [];

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
  var coords = getCursorPosition(e);
  flakes.push(coords);
}

var getCursorPosition = function(e)
{
  var cEle = x$('#canvas').elements[0];
  var coords = { "x" : 0, "y" : 0 };
  coords.x = e.touches[0].clientX;
  coords.y = e.touches[0].clientY;
  
  coords.x -= cEle.offsetLeft;
  coords.y -= cEle.offsetTop;
  
  return coords;
}

var setupCanvas = function()
{
  // Set the width and height before turning on the context
  var cEle = x$('#canvas').elements[0];
  cEle.width = document.body.clientWidth;
  cEle.height = document.body.clientHeight;

  ctx = cEle.getContext("2d");
  cEle.addEventListener("touchstart", onCanvasClick, false);
}

function draw() {
  ctx.clearRect(x-25,y-25,100,100);
  var snowflake = new Image();
  snowflake.src = "snowflake.png";
  ctx.drawImage(snowflake, x, y);
  for(var i = 0; i < flakes.length; ++i)
  {
    ctx.clearRect(flakes[i].x-25, flakes[i].y-25, 100, 100);
    ctx.drawImage(snowflake, flakes[i].x, flakes[i].y);
    flakes[i].y += dy;
  }
  y += dy;
}

