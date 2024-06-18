// generate color hex code

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]        
    }
    return color;
}
let interval;
const startChangingColor = function(){
   if(!interval){
     interval = setInterval(changeColor, 1000);
   }

    function changeColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
function stopChangingColor(){
    clearInterval(interval);
    interval=null;
}
document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChangingColor)
// setInterval(randomColor(),1000)

