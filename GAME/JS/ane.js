/**
 * Created by Zsf on 2016/4/28.
 */
var aneObj = function () {
    this.x = [];
    this.len = [];
}
aneObj.prototype.num = 50;

aneObj.prototype.init = function ()
{
    for (var i = 0; i <= this.num; i++)
    {
        this.x[i] = i * 16 + Math.random() * 20;//[0,1)
        this.len[i] = 200 + Math.random() * 50;
    }
    //console.log("11111");
}

aneObj.prototype.draw = function ()
{
    ctx2.save();//save();  restore();   样式定义只在这两个api之间起作用
    // 所有ane都有的属性就在for循环外，更加简洁。
    ctx2.strokeStyle = "#3b154e";//笔触颜色属性
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round";//绘制圆形的结束线帽：
    ctx2.globalAlpha= 0.6;     //给ane一个透明度；
    for (var i = 0; i <= this.num; i++)
    {
        //beginPath,moveTo,lineTo.stroke,strokeStyle,lineWidth,lineCap,
        ctx2.beginPath();
        ctx2.moveTo(this.x[i], canHeight);
        ctx2.lineTo(this.x[i], canHeight - this.len[i]);

        ctx2.stroke();
    }
    ctx2.restore();

}