let x,y,dx,dy,r;
let w,h,dw,dh,rx,ry;
let row,col,pad,pl,plw;
let grid=[];
let score;
let sec;

function timer()
{
  sec+=1;
}

function setup() {
  createCanvas(400, 300);
  
  dx=3;
  dy=2;
  r=8;
  x=2*r;
  y=height-150;
 
  w=60;
  dw=4;
  h=10;
  rx=width/2-w/2;
  ry=height-h;
  row=4;
  col=7;
  pad=10;
  pl=45;
  pw=15;
  
  score=0;
  
  for(let i=0;i<row;i++)
    {
      grid[i]=[];
      
      for(let j=0;j<col;j++)
        {
          
          
          grid[i][j]={"x":10+(pl+pad)*j  ,"y":30+(pw+pad)*i  ,"visible":1};
        }
    }
  
  sec=0;
  
  setInterval(timer,1000)
  
}



function show_grid()
{
  score=0;
  for(let i=0;i<row;i++)
    {
      for(let j=0;j<col;j++)
        {
          
          if(!grid[i][j].visible)
          { score+=1;
            continue;
          }
          
         let a=grid[i][j].x,b=grid[i][j].y;
          
          if(a<=x && x<=(a+pl))
          {
            
            if((y-r)<=(b+pw) && (y-r)>=b)
            { grid[i][j].visible=0;
              dy*=-1;
            }
            else if((y+r)>=b && (y+r)<=(b+pw))
            { grid[i][j].visible=0;
               
              dy*=-1;
            }
            
            
          
          }
          else if(y>=b && y<=(b+pw))
            {
              if((x+r)>=a && (x+r)<=(a+pl))
               { grid[i][j].visible=0;
                 dx*=-1;
               }
              else if((x-r)>=a && (x-r)<=(a+pl))
               {grid[i][j].visible=0;
                 dx*=-1
               }
              
              
            }
          
            
            
          
         
          
          
          if(grid[i][j].visible)
            {
          
          fill("black");
          rect(grid[i][j].x,grid[i][j].y,pl ,pw);
            }
          else
            {
              score+=1;
            }
          }
    }
}


function update_ball()
{
   if(x+r>=width)
    {
      dx*=-1;
    }
  if(x<=r)
    {
      dx*=-1;
    }
  
  // if(y+r>=height)
  //   {
  //     dy*=-1;
  //   }
  if(y<=25+r)
    {
      dy*=-1;
    }
  
  if(x>=rx && x<=rx+w && y+r>=ry)
    {
      dy*=-1;
    }
  
  
}

function move_ball()
{
   
  x+=dx;
  y+=dy;
}

function move_paddle()
{
   if(keyIsDown(LEFT_ARROW) && rx>=0)
    {
      
       rx-=dw;
    }
  
  if(keyIsDown(RIGHT_ARROW) && rx+w<=width)
    {
      rx+=dw;
    }
  
}

function restart()
{
  show_text();
  
   if( (x<rx || x>rx+w) && (y+r)>=height )
    {
       setup();
    }
}


function show_circle()
{
  strokeWeight(1);
  fill("red");
  circle(x,y,2*r);
}

function show_paddle()
{
  
  fill("black");
  rect(rx,ry,w,h);
}

function show_text()
{
  strokeWeight(2);
   textSize(20);
  fill("rgb(248,247,146)");
  rectMode(CORNER);
  rect(0,0,width,25);
  fill('#096D96')
  text(`Score: ${score}`,5,5,100,25);
  text(`Timer: ${sec}s`,150,5,1000,25);
  
}


function draw() {
  
  restart();
  
  background('#CBC7C7F7');
  
  show_text();
  show_grid();
  show_circle();
  show_paddle();
  update_ball();
  move_paddle();
  move_ball();
  
  if(score==28)
    {
      noLoop();
      fill('yellow')
      rect(0,0,400,300);
      fill('#F4180A');
      rectMode(CENTER);
    text(`You Won!`,width/2,height/2,100,25);
    text(`Total time taken: ${1000}s`,width/2,height-100,240,25);
      
    }
 
   
  
 
  
}


