/* Created by Zsf on 2016/5/1.*/
var babyObj = function()
{
    this.x;
    this.y;
    this.angle;
    //this.babyEye = new Image();
    this.babyBody = new Image();
    //this.babyTail = new Image();

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;

}
babyObj.prototype.init = function()
{


    this.angle = 0;
    this.x = canWidth * 0.5 + 50;
    this.y = canHeight * 0.5 + 50;
    this.babyBody.src = "./src/babyFade0.png"
    //this.babyEye.src = "./src/babyEye0.png"
    //this.babyTail.src = "./src/babyTail0.png"


}
babyObj.prototype.draw = function()
{

    //让小鱼不断趋近于大鱼
    this.x = lerpDistance(mom.x,this.x,0.99);
    this.y = lerpDistance(mom.y,this.y,0.99);
    //获得mom和baby之间的角度差
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;//反正切值
    this.angle = lerpAngle(beta , this.angle , 0.6);

    //baby tail
    this.babyTailTimer += deltaTime;
    if(this.babyTailTimer > 50)
    {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }
     //baby eye
    this.babyEyeTimer += deltaTime;
    if(this.babyEyeTimer > this.babyEyeInterval)
    {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;
        if (this.babyEyeCount == 0)
        {
            this.babyEyeInterval = Math.random() * 1500 + 2000;
        }
        else
        {
            this.babyEyeInterval = 200;
        }
    }

    //baby body
    this.babyBodyTimer += deltaTime;
    if (this.babyBodyTimer > 200)
    {
        this.babyBodyCount = this.babyBodyCount + 1 ;
        this.babyBodyTimer = 0;//必须把时间归零否则就一直加1了。
        if (this.babyBodyCount > 19)
        {
            this.babyBodyCount = 19;
            //game over
            //alert("游戏结束");
            data.gameOver = "true";
        }

    }
    ctx1.save();//该段设置只在save和restore之间起作用。

    ctx1.translate(this.x,this.y);//使该画布的0,0点变为小鱼的坐标
    //ctx1
    ctx1.rotate(this.angle);

    var babyTailCount = this.babyTailCount;
    //ctx1.drawImage(this.babyTail,-this.babyTail.width * 0.5 + 25 , -this.babyTail.height * 0.5);
    ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width * 0.5 + 25 , -babyTail[babyTailCount].height * 0.5);
    var babyBodyCount = this.babyBodyCount;
    ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width * 0.5,-babyBody[babyBodyCount].height * 0.5);
    var babyEyeCount = this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width * 0.5,-babyEye[babyEyeCount].height * 0.5);

    ctx1.restore();
}