const cvs=document.querySelector('.background');
const ctx=cvs.getContext('2d');
function init(){
    cvs.width=window.innerWidth * devicePixelRatio;
    cvs.height=window.innerHeight * devicePixelRatio;
}
init();
const fontSize=20 * devicePixelRatio;
ctx.font=`${fontSize}px "Consolas"`;
const columnCount=Math.floor(cvs.width / fontSize);
const charIndex=new Array(columnCount).fill(0);
var clg = ctx.createLinearGradient(0, 0, cvs.width, cvs.height);
clg.addColorStop(0, "rgba(11, 28, 157, 0.1)");
clg.addColorStop(0.17, "rgba(2, 0, 77, 0.1)");
clg.addColorStop(1, "rgba(2, 0, 77, 0.1)");
var flag = 1

function draw(){
    ctx.fillStyle=clg;
    ctx.fillRect(0,0,cvs.width,cvs.height);
    ctx.fillStyle='rgba(0, 255, 255, 0.2)';
    if(flag)
        ctx.textBaseline='bottom';
    else
        ctx.textBaseline='top';
    for(let i=0;i<columnCount;i++){
        const text=getRandomChar();
        const x=i*fontSize;
        const y=charIndex[i]*fontSize;
        ctx.fillText(text,x,y);
        if(y>cvs.height && Math.random()>0.99){
            charIndex[i]=0;
        }else{
            charIndex[i]++;
        }
    }
    flag = 0;
}

