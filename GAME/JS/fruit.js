/* Created by Zsf on 2016/4/28.
 */
var fruitObj = function () {
    this.alive = [];
    this.orange = new Image();
    this.blue = new Image();
    this.l = [];
    this.x = [];
    this.spd = [];
    this.fruitType = [];
    this.y = [];
}


fruitObj.prototype.num = 30;


fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003;//[0.005,0.02)
        this.fruitType[i] = "";
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}


fruitObj.prototype.draw = function () {

    for (var i = 0; i < this.num; i++) {

        if (this.alive[i]) {
            if (this.fruitType[i] == "blue") {
            var pic = this.blue;
             }
            else {
            var pic = this.orange;
             }
            if (this.l[i] <= 14) {
                this.l[i] += this.spd[i] * deltaTime;//果实变大‘
            }
            else {
                this.y[i] -= this.spd[i] * 7 * deltaTime;//可在此增加倍数加快减慢果实漂浮速度；
            }

            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);//drawImage内五个数据  对象，x坐标，y坐标，宽，高
            if (this.y[i] <= 10) {
                this.alive[i] = false;
            }
        }

    }


}


fruitObj.prototype.born = function (i) {

    var aneID = Math.floor(Math.random() * ane.num);//随机获得一个ane的id号
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if (ran < 0.3) {
        this.fruitType[i] = "blue";
    }
    else {
        this.fruitType[i] = "orange";
    }

}

function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) num++;
    }
    if (num < 15) {
        //send fruit  果实少于十五个就发出果实born；
        sendFruit(i);
        return;
    }
}
function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);
            return;
        }
    }
}

/* fruitObj.prototype.update = function () {
 var num = 0;
 for (var i = 0; i < this.num; i++) {
 if (this.alive[i])num++;
 }
 }*/

