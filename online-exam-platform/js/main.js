

function toggleMode(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("mode","dark");
}else{
localStorage.setItem("mode","light");
}

}



window.onload=function(){

let mode=localStorage.getItem("mode");

if(mode==="dark"){
document.body.classList.add("dark");
}

}