/**
 * Created by Zsf on 2016/5/1.
 */
//判断果实和大鱼的距离
function momFruitsCollision()
{
    if(!data.gameOver)
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
                    if(fruit.fruitType[i] == "blue")
                    {
                        //我在这里让大鱼在吃到蓝色果实的时候直接会中毒身亡。小鱼就会死掉。
                        baby.babyBodyCount = 19;
                        data.double = 2;
                    }
                    if(fruit.fruitType[i] == "orange")
                    {
                        data.double = 1;
                    }
                    data.fruitNum += data.double;
                    if (data.fruitNum > 19)
                    {
                        data.fruitNum = 19;
                    }

                    mom.momBodyCount++;
                    if(mom.momBodyCount>=7)
                    {
                        mom.momBodyCount = 7;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }

}

// mom  baby  collision
function momBabyCollision()
{
    if(data.fruitNum > 0 && !data.gameOver)
    {
        var l = calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l < 900)
        {
            //baby recover
            //baby.babyBodyCount = baby.babyBodyCount - data.fruitNum;
            if((baby.babyBodyCount - data.fruitNum) < 0 )
            {
                baby.babyBodyCount = 0;
            }
            else
            {
                baby.babyBodyCount = baby.babyBodyCount - data.fruitNum;
            }
            //baby.babyBodyCount = 0;
            //data ->0
            data.addScore();
            //data.reset();
            mom.momBodyCount = 0 ;
            //draw halo
            halo.born(baby.x,baby.y);


        }
    }

}