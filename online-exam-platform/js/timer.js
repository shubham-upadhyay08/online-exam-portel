let time=300;

let timer=setInterval(function(){

time--;

document.getElementById("timer").innerText="Time: "+time;

if(time<=0)
{
clearInterval(timer);
window.location="result.html";
}

},1000);