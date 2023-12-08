let scoresList = document.querySelector("#highscores");
let noScores = document.querySelector("#no-scores");
let clearScores = document.querySelector("#clear");

function getScores() {
  if ("scores" in localStorage) {
    var highScores = JSON.parse(localStorage.getItem("scores"));
    highScores.sort((a, b) => b.score - a.score);
    for (let i = 0; i < highScores.length; i++) {
      console.log(highScores.sort());
      scoreLi = document.createElement("li");
      scoreLi.textContent =
        highScores[i].name + "  -  " + highScores[i].score.toString();
      scoresList.appendChild(scoreLi);
    }
  } else {
    noScores.textContent = '';
    var highScores = [];
    noScores.textContent = "No Scores to display. Practice Quiz Now!";
  }
}

getScores();

clearScores.addEventListener("click", function (event) {
  event.preventDefault;
  localStorage.removeItem("scores");
  scoresList.textContent = "";
  getScores();
});
