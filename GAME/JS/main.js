/**
 * Created by Zsf on 2016/4/27.
 */
var can1;
var can2;

var ctx1;
var ctx2;

//鼠标
var mx;
var my;
var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;

var mom;

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {
	//获得canvas context
	can1 = document.getElementById("canvas1");//canvas1在前面：fishes，dust，UI，circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//canvas2在后面：background，ane，fruits
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src = "./src/background.jpg";

	canWidth=can1.width;
	canHeight=can1.height;
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

}

function gameloop() {
	window.requestAnimFrame(gameloop);//setInterval setTimeout  fps:frame per second;
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	//console.log(lastTime);
}

function onMouseMove(e) {
    //获取鼠标的坐标值
    if (e.offSetX || e.layerX) {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;

    }
}