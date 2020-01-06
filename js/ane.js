/**
 * Created by Zsf on 2016/4/28.
 * ane 海葵
 */
var aneObj = function () {
    //start point ,control point, end point(sin())

    this.rootx = [];//y不需要定义了。海葵的高就是根的Y值
    this.headx = [];
    this.heady = [];
    //this.len = [];
    this.alpha = 0;//sin
    this.amp = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    for (var i = 0; i <= this.num; i++) {
        this.rootx[i] = i * 16 + Math.random() * 20;//[0,1)
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;//海葵震动的幅度可调整
    }
}
aneObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0007;//摆动的速度可调整
    var l = Math.sin(this.alpha);
    ctx2.save();//save();  restore();   样式定义只在这两个api之间起作用
    // 所有ane都有的属性就在for循环外，更加简洁。
    ctx2.strokeStyle = "#3b154e";//笔触颜色属性
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round";//绘制圆形的结束线帽：
    ctx2.globalAlpha = 0.6;     //给ane一个透明度；
    for (var i = 0; i <= this.num; i++) {
        //beginPath,moveTo,lineTo.stroke,strokeStyle,lineWidth,lineCap,
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        //海葵从上到下摆动的范围可调整
        this.headx[i] = this.rootx[i] + l * this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();

}