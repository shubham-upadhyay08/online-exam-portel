let urlParams = new URLSearchParams(window.location.search);
let examType = urlParams.get("exam");

let questions = [];
let current = 0;
let score = 0;

fetch("data/questions.json")
.then(response => response.json())
.then(data => {

questions = data[examType];

loadQuestion();

});

function loadQuestion(){

let q = questions[current];

let html = "<h3>"+q.question+"</h3>";

for(let i=0;i<q.options.length;i++){

html += `<button class="option" onclick="selectOption(this,${i})">${q.options[i]}</button>`;

}

document.getElementById("questionBox").innerHTML = html;

}

function checkAnswer(i){

if(i === questions[current].answer){

score++;

}

}

function nextQuestion(){

current++;

if(current < questions.length){

loadQuestion();

}

else{

localStorage.setItem("score",score);
localStorage.setItem("totalQuestions",questions.length);

window.location="result.html";

}

}

let selectedAnswer = null;

function selectOption(element,index){

let options = document.querySelectorAll(".option");

options.forEach(opt=>{
opt.classList.remove("selected");
});

element.classList.add("selected");

selectedAnswer = index;

}

function createPalette(){

let paletteHTML="";

for(let i=0;i<questions.length;i++){

paletteHTML += `<button class="palette-btn" onclick="jumpQuestion(${i})">${i+1}</button>`;

}

document.getElementById("palette").innerHTML = paletteHTML;

}

function jumpQuestion(index){

currentQuestion=index;

loadQuestion();

}