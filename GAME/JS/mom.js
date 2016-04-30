/**
 * Created by Zsf on 2016/4/28.
 */
var momObj = function ()
{
        this.x;
        this.y;
        this.angle;
        this.bigEye = new Image();
        this.bigBody = new Image();
        this.bigTail = new Image();

}
momObj.prototype.init = function ()
{
        this.x = canWidth * 0.5;
        this.y = canHeight * 0.5;
        this.angle = 0;
        this.bigEye.src="./src/bigEye0.png";
        this.bigBody.src="./src/bigSwim0.png";
        this.bigTail.src="./src/bigTail0.png";
}
momObj.prototype.draw = function ()
{
    //lerp x,y
        this.x = lerpDistance(mx,this.x,0.9);
        this.y = lerpDistance(my,this.y,0.9);

        //delta angle  每一帧都要得到这个角度
        //Math.atan2(y,x)

        var deltaY = my - this.y;
        var deltaX = mx - this.x;
        var beta = Math.atan2(deltaY,deltaX);

        //lerp angle
        //获得这个角度差
        this.angle = lerpAngle(beta + Math.PI , this.angle , 0.6);

        ctx1.save();
        ctx1.translate(this.x,this.y);
        ctx1.rotate(this.angle);
        ctx1.drawImage(this.bigEye,-this.bigEye.width * 0.5,-this.bigEye.height * 0.5);
        ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5,-this.bigBody.height * 0.5);
        ctx1.drawImage(this.bigTail,-this.bigTail.width * 0.5 + 30,-this.bigTail.height * 0.5);

        ctx1.restore();
}
