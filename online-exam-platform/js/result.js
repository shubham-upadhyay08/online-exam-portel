let score = localStorage.getItem("score");

document.getElementById("score").innerText = "Your Score: " + score;

let status = document.getElementById("status");

if(score >= 1)
{
status.innerHTML = "<span class='badge pass'>PASS</span>";
}
else
{
status.innerHTML = "<span class='badge fail'>FAIL</span>";
}