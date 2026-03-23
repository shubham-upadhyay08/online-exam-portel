

const params = new URLSearchParams(window.location.search);
const examType = params.get("exam");



const startBtn = document.getElementById("startExam");


if(examType){

startBtn.href = "exam.html?exam=" + examType;

}else{

alert("Exam type not selected!");

window.location.href = "dashboard.html";

}


startBtn.addEventListener("click", function(){

startBtn.innerText = "Loading Exam...";

startBtn.style.background = "green";

});