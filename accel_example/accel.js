var width = 280;
var height = 460;

var x = width/2;
var y = height/2;

var ctx = null;

var preventBehavior = function(e)
{
  e.preventDefault();
}

var watchAccel = function()
{
  var canvas = document.getElementById("canvas");
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight - 100;
  
  ctx = canvas.getContext("2d");
  var succ = function(a){
    updateValues(a);
    updateDraw(a);
  };
  var fail = function(){};
  var opt = {};
  opt.frequency = 100;
  timer = navigator.accelerometer.watchAcceleration(succ, fail, opt);
}

var updateDraw = function(accel)
{
  ctx.fillStyle = "#ffffff";
  drawBubbles();
  
  var dx = roundNumber(accel.x, 1)
  var dy = roundNumber(accel.y, 1)
  if (x - dx <= width && x - dx > 0)
    x -= dx;
  if (y + dy <= height && y + dy > 0)
    y += dy;

} 

var drawBubbles = function()
{
	ctx.clearRect(x - 30, y - 30, 60, 60);
	ctx.beginPath();
	ctx.arc(x,y,10,0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#0000ff";
	ctx.beginPath();
	ctx.arc(x,y,7,0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#ffffff";
	
	// Draw a 2nd circle that moves.
	var x2 = x - 100;
	var y2 = y + 100;
	
	ctx.clearRect(x2 - 60, y2 - 60, 120, 120);
	ctx.beginPath();
	ctx.arc(x2,y2,25,0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#0000ff";
	ctx.beginPath();
	ctx.arc(x2,y2,18,0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#ffffff";
		
}

var updateValues = function(a)
{
  document.getElementById('x').innerHTML = roundNumber(a.x, 3);
  document.getElementById('y').innerHTML = roundNumber(a.y, 3);
  document.getElementById('z').innerHTML = roundNumber(a.z, 3);
}

var roundNumber = function(num, dec) {
  var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
  return result;
}

