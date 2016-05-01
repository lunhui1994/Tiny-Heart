/**
 * Created by Zsf on 2016/5/1.
 */
//判断果实和大鱼的距离
function momFruitsCollision()
{
    for(var i = 0; i < fruit.num; i++)
    {
        if (fruit.alive[i])
        {
            //calculate length   calculate2一个求平方和的公式已封装好。
            var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l < 900)
            {
                //  fruit eaten
                fruit.dead(i);
            }


        }
    }
}